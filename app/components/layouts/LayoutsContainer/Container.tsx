"use client"
import React, { ReactNode } from 'react'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
import { useLayout } from '@/app/features/SidebarProvider/SidebarProvider'
const Container:React.FC<{children:ReactNode}> = ({children}) => {
  const {sidebar} =useLayout()  
  return (
   <>
   <div className='flex flex-col'>
    <TopBar/>
    <div className='flex'>
    <SideBar/>
      <main className={` flex-1 bg-blue-50 transition-all duration-500 px-10 border-2 w-full min-h-[100vh] ${sidebar===true?'ml-64':'ml-0'}`}>
        {children}
      </main>
    </div>
</div>
   </>
  )
}
export default Container
