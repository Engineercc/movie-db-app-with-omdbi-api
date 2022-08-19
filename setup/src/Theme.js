import React, { useState, useEffect } from "react";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const getStorageState = () => {
  let themeChecked = false;
  if (localStorage.getItem("themeChecked")) {
    themeChecked = JSON.parse(localStorage.getItem("themeChecked"));
  }

  return themeChecked;
};
const Theme = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const [themeChecked, setThemeChecked] = useState(getStorageState());
  const toggleTheme = () => {
    if (themeChecked) {
      setThemeChecked(!themeChecked);
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
      setThemeChecked(!themeChecked);
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    console.log(localStorage.setItem("themeChecked", themeChecked));
  }, [theme, themeChecked]);
  return (
    <div className="section-theme py-4">
      <label className="dark-mode-checkbox">
        <input type="checkbox" checked={themeChecked} onChange={toggleTheme} />
        <span className="theme-changer"></span>
      </label>
    </div>
  );
};

export default Theme;
