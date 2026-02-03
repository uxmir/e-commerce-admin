"use client"
import { useLayout } from '@/app/features/SidebarProvider/SidebarProvider'
import React from 'react'
const TopBar:React.FC = () => {
  const {sidebar,handleSidebar,openSidebar}=useLayout()  
  return (
    <div onClick={handleSidebar} className={`py-3 w-full fixed top-0 pr-5 cursor-pointer  transition-all duration-500 bg-white  border-b border-gray-200 ${sidebar===true?' pl-10 lg:pl-74':'pl-10'}`}>
      <div>
        <span className='hidden lg:block'>mirmonir</span>
        <span onClick={openSidebar} className='block lg:hidden'>mirres</span>
      </div>
    </div>
  )
}

export default TopBar
