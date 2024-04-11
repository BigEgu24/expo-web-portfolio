import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

export function useAppContext() {
 return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [modal, setModal] = useState({
    type: ''
  });
  const [project, setProject] = useState({
    img: '',
    type: '',
    title: '',
    description: '',
    slugs: '',
    github: '',
    siteURL: ''
  });
  

  return(
   <AppContext.Provider value={{ 
   functions: {
    setModal,
    setProject
   }, 
   values: {
    modal,
    project
   } 
   }}>
     {children}
   </AppContext.Provider>
  )
}

