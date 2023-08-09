import { useState, createContext } from 'react';
// create context
export const SidebarContext = createContext()
const SidebarProvider = ({ children }) => {
  // Sidebar State
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpened(false)
  }
  return <SidebarContext.Provider value={{ isOpened, setIsOpened, handleOpen }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
