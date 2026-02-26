"use client"
import { X } from 'lucide-react'
import React, { ReactNode } from 'react'
import  './dialog.css'
interface dialgProps{
 children:ReactNode 
 close?:()=>void  
 width?:string
}
const Dialog:React.FC<dialgProps> = ({children,close,width}) => {
  return (
       <div>
       <div className="fixed w-full h-full left-0 top-0 bg-black/60 z-[99999] flex justify-center items-center">
      <div  className={`bg-white dark:bg-[#1D1B32]  px-6 py-6 relative rounded-[10px] modal ${width}`}>
        {children}
      <X onClick={close} className="text-gray-700 cursor-pointer absolute right-2 top-2"/> 
      </div>
      </div>
    </div>
  )
}
export default Dialog
