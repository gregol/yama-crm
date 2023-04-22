import React, { useContext } from 'react'

import SidebarContent from './SidebarContent'
import { SidebarContext } from '../../context/SidebarContext'
import Backdrop from '../atom/Backdrop'

function MobileSidebar() {
  //@ts-ignore
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)

  return (
    <div className={`${isSidebarOpen ? 'visible' : 'hidden'}`}>
      <>
        <span onClick={closeSidebar} className='text-white'>
          <Backdrop />
        </span>
       
        <aside className='fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden'>
          <SidebarContent />
        </aside>
       
      </>
    </div>
    
  )
}

export default MobileSidebar
