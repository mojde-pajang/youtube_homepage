import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);


export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("Should use this in Sidebar Context");

  return value;
}


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
    console.log({ isLargeOpen, isSmallOpen })
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

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])


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