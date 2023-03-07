import { createContext } from 'react';

export const ColorModeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {},
});
