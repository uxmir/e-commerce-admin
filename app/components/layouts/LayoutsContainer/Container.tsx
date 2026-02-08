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
      <main className={` flex-1 bg-blue-50/50 dark:bg-[#1D1B32] transition-all duration-700 px-10  pt-20 w-full min-h-[100vh] ${sidebar===true?'lg:ml-64':'ml-0'}`}>
        {children}
      </main>
    </div>
</div>
   </>
  )
}
export default Container
