import React, { useState } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { Loader2, MoreVertical,Edit3, Eye, Download, Trash2, FileText, } from 'lucide-react'
import globalApi from './../../../../service/globalApi'
import { toast } from 'sonner'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const ExistingResumes = ({resumedetail,ResumeNum,refreshResumes,setloadingResumes}) => {


  const [opendeleteDialog, setopendeleteDialog] = useState(false)

  const [continueLoading, setcontinueLoading] = useState(false)


  const navigate=useNavigate()

  const deleteResume=async()=>{
    setcontinueLoading(true)
    setloadingResumes(true)
    try {
      const response=await globalApi.deleteResume(resumedetail.documentId)
      if(response){
        refreshResumes()
        toast.success("Delete Successfull", {className:"!bg-green-500 !text-white"})
      }
    } catch (error) {
      console.log("Error Deleting Resume",error);
      toast.error(" Unable to Delete Resume",{className:"!bg-red-500 !text-white"})
      
    }finally{
      setloadingResumes(false)
      setcontinueLoading(false)
      setopendeleteDialog(false)
    }
      
    
    

  }


  return (
     //for tailwind instead of style css but doesnt support dynamic conic color 

     // bg-conic/[from_var(--border-angle)] from-transparent to-green-500 from-70% via-80% to-100%  


     <div className="group relative">
      <div
        className="flex items-center relative justify-center animate-rotate-border 
                  rounded-lg  h-[200px] md:h-[282px] cursor-pointer hover:shadow-lg p-0.5 hover:scale-105 hover:-translate-y-2 hover:[animation-play-state:paused] duration-500 transition-all" style={{
                    background:`conic-gradient(from var(--border-angle), transparent 50%, ${resumedetail.themeColor} 100%)`      
                  }}>                                                                                                           
        <div className='w-full  h-full bg-secondary border-2 rounded-lg'>

          <div className='flex justify-center items-center flex-col h-full'>
              <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
            <FileText className="h-8 w-8" />
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {resumedetail.title}
            </h3>
            <p className="text-sm text-muted-foreground">Last updated : {(resumedetail.updatedAt).slice(0,10)}</p>
          </div>
          </div>
        <div className="absolute opacity-100 top-4 right-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background hover:border-border transition-all">
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="font-medium">{resumedetail.title}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate(`/dashboard/resume/${resumedetail.documentId}/edit`)}
                className="cursor-pointer"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate(`/myresume/${resumedetail.documentId}/view`)}
                className="cursor-pointer"
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate(`/myresume/${resumedetail.documentId}/view`)}
                className="cursor-pointer"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setopendeleteDialog(true)}
                className="cursor-pointer text-destructive focus:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AlertDialog open={opendeleteDialog} onOpenChange={setopendeleteDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-destructive" />
              Delete Resume
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Are you sure you want to delete "{resumedetail.title}"? This action cannot be undone and will permanently
              remove your resume from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setopendeleteDialog(false)} className={"bg-green-400 text-white hover:text-teal-50 hover:bg-green-500"}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={deleteResume}
              className="bg-destructive text-white hover:bg-destructive/70"
            >
              {continueLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete Resume"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </div>
       
    </div>
    
  )
}

export default ExistingResumes