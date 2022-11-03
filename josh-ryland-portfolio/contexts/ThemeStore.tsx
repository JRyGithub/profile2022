import { createContext, useEffect, useState } from "react";

export enum ThemeTypes {
  Dark = 'DARK',
  Light = 'LIGHT'
}

const ThemeContext = createContext({theme: ThemeTypes.Dark, switchTheme: (theme: ThemeTypes) => {}}); // line A - creating the context

const ThemeStore = ({ children }) => {
  
  const [theme, setTheme] = useState<ThemeTypes>(ThemeTypes.Dark); // line B - setting the initial theme (dark)

  const switchTheme = (theme:ThemeTypes) => setTheme(theme); // line C - changing the theme

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('theme'));
    if(localTheme && (localTheme === ThemeTypes.Dark || ThemeTypes.Light)) setTheme(localTheme)
    else{
      const defaultDarkTheme =
        global?.window?.matchMedia?.("(prefers-color-scheme:light)")?.matches ? ThemeTypes.Light : ThemeTypes.Dark; //Gets users preference for theme, defaulting to dark
        setTheme(defaultDarkTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };