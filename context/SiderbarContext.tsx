import { createContext, useEffect, useState } from 'react';

export const SidebarContext = createContext();

export default function SidebarContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState();

  useEffect(() => {
    document.querySelector('html').classList.toggle('overflow-y-hidden');
  }, [isSidebarOpen]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
