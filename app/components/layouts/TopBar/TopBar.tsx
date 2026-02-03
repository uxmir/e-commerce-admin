"use client"
import { useLayout } from '@/app/features/SidebarProvider/SidebarProvider'
import { MenuIcon, PanelRight } from 'lucide-react'
import React from 'react'
const TopBar:React.FC = () => {
  const {sidebar,handleSidebar,openSidebar}=useLayout()  
  return (
    <div  className={`py-3 w-full fixed top-0 pr-5 cursor-pointer  transition-all duration-500 bg-white  border-b border-gray-200 ${sidebar===true?' pl-10 lg:pl-74':'pl-10'}`}>
      <div>
        <PanelRight onClick={handleSidebar} className='hidden lg:block'/>
        <MenuIcon onClick={openSidebar} className='block lg:hidden'/>
      </div>
    </div>
  )
}

export default TopBar
