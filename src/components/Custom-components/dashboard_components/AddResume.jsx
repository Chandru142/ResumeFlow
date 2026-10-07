import { Loader2, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid';
import globalApi from './../../../../service/globalApi'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useNavigate } from 'react-router-dom'

const AddResume = () => {
  const [openDialog, setopenDialog] = useState(false)
  const [resumeTitle, setresumeTitle] = useState()
  const [isloading, setisloading] = useState(false)
  const {user}=useUser()

  const navigate=useNavigate() 

  const onCreate=async()=>{
  setisloading(true)
   const id=uuidv4();
   const data={
      title:resumeTitle,
      resumeId:id,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName

   }
   try {
   const res= await globalApi.createNewResume(data)
   //console.log(res);
   setisloading(false)
   setopenDialog(false)
   navigate(`/dashboard/resume/${res.data.documentId}/edit`)
  
   } catch (error) {
   // console.log(error);
    setisloading(false)
    
   }
   
   

  }

  return (
    <div >
    <div onClick={()=>setopenDialog(true)} className='  flex items-center justify-center bg-secondary border-dashed border-2 border-primary
                  rounded-lg h-[200px] md:h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg duration-500 transition-all'>

    <PlusCircle className='md:w-6 w-7 h-7'/>

  </div>

    <Dialog open={openDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Resume</DialogTitle>
        <DialogDescription>
          Add the title for your resume
          <Input onChange={(e)=>setresumeTitle(e.target.value)} type="text" placeholder="Ex:Product Manager" className="my-2"/>
        </DialogDescription>
        
        <div className='flex items-center justify-end gap-2'>
          <Button onClick={()=>setopenDialog(false)} variant="ghost">Cancel</Button>
          <Button disabled={!resumeTitle||isloading} onClick={()=>{
            onCreate()
          }}>
            {isloading?<Loader2 className='animate-spin'/>:"Create"}</Button>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>

    </div>
  )
}

export default AddResume