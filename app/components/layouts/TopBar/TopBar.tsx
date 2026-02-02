"use client"
import { useLayout } from '@/app/features/SidebarProvider/SidebarProvider'
import React from 'react'
const TopBar:React.FC = () => {
  const {sidebar,handleSidebar}=useLayout()  
  return (
    <div onClick={handleSidebar} className={`py-3 w-full pr-5  transition-all duration-500 bg-white  border-b border-gray-200 ${sidebar===true?'pl-74':'pl-10'}`}>
      mirmonir
    </div>
  )
}

export default TopBar
