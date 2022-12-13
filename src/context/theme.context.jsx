import { createContext } from "react";
//create the context
const ThemeContext = createContext();

//create the wraper
const ThemeProviderWraper = (props) => {

  return (
    <ThemeContext.Provider value={"dark"}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWraper };