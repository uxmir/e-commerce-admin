"use client"
import React, { ReactNode } from 'react'
interface badgeProps{
 color?:string;
 children:ReactNode ,
 customClass?:string  
}
const Badge:React.FC<badgeProps> = ({color,children,customClass}) => {
  return (
  <>
  <span className={`px-2 py-1 rounded font-medium text-sm ${color} capitalize ${customClass}`}>{children}</span>
  </>
  )
}

export default Badge
