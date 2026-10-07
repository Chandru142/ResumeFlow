import React, { useContext, useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'


const colors=[
 { name: "Blue", code: "#3b82f6" },    // clean, professional
  { name: "Teal", code: "#14b8a6" },    // modern, balanced
  { name: "Green", code: "#22c55e" },   // fresh, growth-oriented
  { name: "Amber", code: "#f59e0b" },   // warm, stands out without being harsh
  { name: "Red", code: "#ef4444" },     // strong, but controlled
  { name: "Indigo", code: "#6366f1" },  // elegant and trustworthy
  { name: "Slate", code: "#64748b" },   // neutral with a modern edge
  { name: "Stone", code: "#78716c" },   // earthy, subtle professional
  { name: "Black", code: "#000000" },  
  
]

const Themecolor = () => {
  
  const {resumeId}=useParams()

  
  const [selectColor, setselectColor] = useState({})

  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)




  const setResumeColor=async(color)=>{
    setselectColor(color)
    setresumeInfo({...resumeInfo,themeColor:color.code})
    await updateResumeThemeDB(color.code)
  }





const updateResumeThemeDB=async(colorCode)=>{
  try {
    const res=await globalApi.updateResume(resumeId,{themeColor:colorCode})
    if(res){
      toast.success("Theme Updated",{className:"!bg-green-500 !text-white"})
    }
  } catch (error) {
    toast.error("Failed Updating Theme",{className:"!bg-red-500 !text-white"})
    
  }
}


  return (
    <Popover>
  <PopoverTrigger asChild><Button variant={"outline"}><LayoutGrid/>Theme</Button></PopoverTrigger>
  <PopoverContent className={"w-auto p-4 h-auto" } >
    <div className='grid grid-cols-3 gap-5 '>

    {colors.map((color,index)=>(
      

        <div key={index} onClick={()=>{setResumeColor(color)}
        } className={`rounded-full w-6 h-6 hover:scale-105 cursor-pointer transition-all
           ${selectColor.name === color.name ? "ring-1" : ""}`}  style={{
          
          background:color.code}}></div>
      

    ))}
    </div>


  </PopoverContent>
</Popover>
  )
}

export default Themecolor