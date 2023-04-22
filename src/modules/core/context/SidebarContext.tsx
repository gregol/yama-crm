import React, { useState, useMemo } from 'react'

// create context
export const SidebarContext = React.createContext(null)

//@ts-ignore
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar
    }),
    [isSidebarOpen, toggleSidebar]
  )
  //@ts-ignore
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
