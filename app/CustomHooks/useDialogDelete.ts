import { useState } from "react"
export const useDialogDelete=(data:any[])=>{
    const [dialog,setDialog]=useState<boolean>(false)
    const [selectedId,setSelectedId]=useState<number|null>(null)
    const showDialog=(id:number)=>{
        setDialog(true)
        setSelectedId(id)
        console.log(selectedId)
    }
        const closeDialog=()=>{
        setDialog(false)
    }
    const deleteData=data?.find((d)=>d?.id===selectedId)
    return{
        dialog,
        showDialog,
        closeDialog,
        selectedId,
        deleteData
    }
}