import { useState } from "react"

export const usePrint=(data:any[])=>{
const [selectedId,setSelectedId]=useState<number| null>(null)
const handlePrint=(id:number)=>{
setSelectedId(id)
setTimeout(()=>{
 window.print()
},500)
}
return{
    selectedId,
    handlePrint
}
}