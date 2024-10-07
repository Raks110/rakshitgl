import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle d-flex align-items-center">
      <span className="material-symbols-rounded" onClick={toggleTheme}>
        contrast
      </span>
    </div>
  );
};

export default ThemeToggle;
