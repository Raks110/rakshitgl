import "./App.css";
import "https://code.jquery.com/jquery-2.1.3.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js";

import BasicNavbar from "./common/navbar/BasicNavbar";
import colors from "./common/colors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./common/theme/ThemeContext";
import AllContent from "./common/AllContent";

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const [themedColors, setThemedColors] = useState(colors.light);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    darkTheme ? setThemedColors(colors.dark) : setThemedColors(colors.light);
  }, [darkTheme]);

  return (
    <>
      <HelmetProvider>
        <Helmet
          htmlAttributes={{
            style: `background-color: ${themedColors.primaryBackground}`,
          }}
          bodyAttributes={{
            style: `background-color: ${themedColors.primaryBackground}`,
          }}
        />
      </HelmetProvider>
      <div className="App">
        <BasicNavbar theme={themedColors} width={width} />
        <AllContent themedColors={themedColors} width={width} />
      </div>
    </>
  );
}

export default App;
