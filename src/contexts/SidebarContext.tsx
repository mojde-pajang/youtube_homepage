import { createContext, ReactNode, useState } from "react";

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null)


type SidebarProviderProps = {
  children: ReactNode
}

function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(prev => !prev)
    } else {
      setIsLargeOpen(prev => !prev)
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
    }

  }
  return (
    <SidebarContext.Provider value={{
      isLargeOpen,
      isSmallOpen,
      toggle,
      close
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider