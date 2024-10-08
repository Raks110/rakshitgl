import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllProjects from "../projects/AllProjects";
import DashBoard from "../dashboard/Dashboard";
import AboutMe from "../about/AboutMe";

function AllContent(props) {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes>
        <Route
          path={`*`}
          element={
            <DashBoard themedColors={props.themedColors} width={props.width} />
          }
        />
        <Route
          path={`/projects`}
          element={
            <AllProjects
              themedColors={props.themedColors}
              width={props.width}
            />
          }
        />
        <Route
          path={`/about`}
          element={
            <AboutMe themedColors={props.themedColors} width={props.width} />
          }
        />
        <Route
          path={`/notes`}
          element={
            <AboutMe themedColors={props.themedColors} width={props.width} />
          }
        />
      </Routes>
    </div>
  );
}

export default AllContent;
