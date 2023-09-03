"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext({});

export const MenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [popout, setPopout] = useState(0);
  return (
    <MenuContext.Provider value={{ menu, setMenu, popout, setPopout }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
