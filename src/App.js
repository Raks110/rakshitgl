import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "https://code.jquery.com/jquery-2.1.3.min.js";
import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js";

import BasicNavbar from "./common/navbar/BasicNavbar";
import Bio from "./dashboard/bio/Bio";
import Projects from "./dashboard/projects/Projects";
import Notes from "./dashboard/notes/Notes";
import colors from "./common/colors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./common/theme/ThemeContext";

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const [themedColors, setThemedColors] = useState(colors.light);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);
  useEffect(() => {
    darkTheme ? setThemedColors(colors.dark) : setThemedColors(colors.light);
  }, [darkTheme]);

  return (
    <>
      <HelmetProvider>
        <Helmet
          bodyAttributes={{
            style: `background-color: ${themedColors.primaryBackground}`,
          }}
        />
      </HelmetProvider>
      <div className="App">
        <BasicNavbar theme={themedColors} />
        <div className="dashboard-items">
          <Bio
            style={styleParentFloatingItems(themedColors, width)}
            theme={themedColors}
            config={{
              logo: require("./static/astronaut" +
                (darkTheme ? "" : "_light") +
                ".gif"),
              logoHeight: 120,
              logoWidth: 120,
            }}
          />
          <Projects
            style={styleParentFloatingItems(themedColors, width)}
            theme={themedColors}
            width={width}
          />
          <Notes
            style={styleParentFloatingItems(themedColors, width)}
            theme={themedColors}
            width={width}
          />
          <span
            className="final-footer"
            style={{ color: darkTheme ? "white" : "black" }}
          >
            built with 🩵 in the windy city. more features underway.
          </span>
        </div>
      </div>
    </>
  );
}

function styleParentFloatingItems(themedColors, width) {
  return {
    maxWidth:
      width >= 1400
        ? "50%"
        : width >= 1200
        ? "55%"
        : width >= 1000
        ? "65%"
        : width >= 850
        ? "75%"
        : "95%",
    backgroundColor: themedColors.accent,
    margin: "auto",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    color: themedColors.textColor,
  };
}

export default App;
