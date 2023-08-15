import { useState, createContext } from 'react';
// create context
export const SidebarContext = createContext()
const SidebarProvider = ({ children }) => {
  // Sidebar State
  const [isOpened, setIsOpened] = useState(false)

  const handleClose = () => {
    setIsOpened(false)
  }
  return <SidebarContext.Provider value={{ isOpened, setIsOpened, handleClose }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
