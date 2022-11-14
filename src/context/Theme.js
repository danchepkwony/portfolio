import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext({});

export default ({children}) => {
	const [theme, setMode] = useState(false);
   
    const setTheme = () => setMode(!theme);

    //Default
    useEffect(() => {
        const themeDefault = localStorage.getItem('theme');
        setMode(themeDefault === "true");
        var targetTheme = themeDefault === "true" ? "light" : "dark"
        document.documentElement.setAttribute('data-theme', targetTheme);
    }, [])

    //Update
    useEffect(() => {
        var targetTheme = theme ? "light" : "dark";
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', theme);
      }, [theme]);

	return (
    <ThemeContext.Provider value={{theme: theme, setTheme}}>
        {children}
    </ThemeContext.Provider>)
};
