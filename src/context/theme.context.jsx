import { createContext, useState } from "react";
//create the context
const ThemeContext = createContext();

//create the wraper
const ThemeProviderWraper = (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWraper };