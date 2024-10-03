import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle d-flex align-items-center">
      <span class="material-symbols-rounded" onClick={toggleTheme}>
            contrast
        </span>
    </div>
  );
};

export default ThemeToggle;