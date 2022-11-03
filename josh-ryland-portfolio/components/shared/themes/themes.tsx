import { useContext } from "react";
import { ThemeProvider} from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeStore";
import { darkTheme } from "./darkTheme";
import { GlobalStyle } from "./globalStyles";
import { lightTheme } from "./lightTheme";

export enum ThemeTypes {
  Dark = 'DARK',
  Light = 'LIGHT'
}

const themes = {
  [ThemeTypes.Dark]: {
    ...darkTheme
  },
  [ThemeTypes.Light]: {
    ...lightTheme
  }
}

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;