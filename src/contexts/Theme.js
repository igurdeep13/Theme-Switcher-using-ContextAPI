import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})


export const hemeProvider = themeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}