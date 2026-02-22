
import { useState } from "react"
export const useFileUpload=()=>{
  const [preview,setPreview]=useState<string | null>(null) 
  //making img base 64 
  const handleImageToString=async(values:any,fileName:string)=>{
    try {
        let payload={...values}
        const file=values[fileName]
        if(file instanceof File){
        const reader=new FileReader()
        reader.readAsDataURL(file)
        const base64=new Promise<string>((resolve,reject)=>{
        reader.onload=()=>resolve(reader.result as string)
        reader.onerror=(error)=>reject(error)
        })
        payload[fileName]=base64
        }
        return payload[fileName]
        
    } catch (error) {
        console.error(error)
    }
  } 
  //handle file change
  const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>, 
    feildName:string,
    setFeildValue:(fileName:string,value:any)=>void)=>{
    e.preventDefault()
    const file=e.target.files?.[0]
    if(file){
     setFeildValue(feildName,file)   
     setPreview(URL.createObjectURL(file))
    }
  }
  return{
    preview,
    handleFileChange,
    handleImageToString
  }
}