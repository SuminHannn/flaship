import { createContext, useContext, useEffect, useState } from "react";

const ActiveMenuContext = createContext();

export const useActiveMenu = () => useContext(ActiveMenuContext);

export const ActiveMenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(
    localStorage.getItem("activeMenu") || ""
  );

  useEffect(
    function () {
      localStorage.setItem("activeMenu", activeMenu);
    },
    [activeMenu]
  );

  return (
    <ActiveMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};
