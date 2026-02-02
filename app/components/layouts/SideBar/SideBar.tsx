"use client"
import { useLayout } from '@/app/features/SidebarProvider/SidebarProvider'
import React from 'react'
const SideBar:React.FC = () => {
  const{sidebar}=useLayout()
  return (
  <>
    <div className={`fixed top-0 z-[9999]  left-0 bg-white transition-all duration-500 h-[100vh] border-r border-gray-200  overflow-y-auto ${sidebar===true?'w-64':'w-5'}`}>
    </div>
  </>
  )
}

export default SideBar
