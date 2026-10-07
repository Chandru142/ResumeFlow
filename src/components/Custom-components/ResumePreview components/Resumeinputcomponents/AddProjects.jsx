import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import RichTextEditor from '../RichTextEditor'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const AddProjects = ({nextBtnState}) => {
const param=useParams()

  const projectFields={
    title: '',
    link: '',
    description:'',
    startDate: '',
    endDate: ''
  }
  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)

  const [projectlist, setprojectlist] = useState(resumeInfo.projects?.length>0?resumeInfo.projects:[projectFields])
  const [loading, setloading] = useState(false)

useEffect(()=>{
  setresumeInfo((prev=>(
    {...prev,projects:projectlist})
  ))
},[projectlist])

useEffect(()=>{
  nextBtnState(true)
},[])

  const handleChange=(index,event)=>{
    const {name,value}=event.target
    const updateList=[...projectlist]
    updateList[index][name]=value
    setprojectlist(updateList)
  }

  const removeProject=(currindex)=>{
    if(projectlist.length===1)return;
    let updateList= [...projectlist]
    updateList=updateList.filter((_,index)=>currindex!=index)
    setprojectlist(updateList)
  }

  const handleAddMore=()=>{
    setprojectlist([...projectlist,projectFields])
  }

  const onSave=async()=>{
    setloading(true)

    try {
      const res=await globalApi.updateResume(param.resumeId, {
        firstName: resumeInfo.firstName,
        lastName: resumeInfo.lastName,
        jobTitle: resumeInfo.jobTitle,
        address: resumeInfo.address,
        phone: resumeInfo.phone,
        email: resumeInfo.email,
        summary: resumeInfo.summary,
        themeColor: resumeInfo.themeColor,
        templateId: resumeInfo.templateId,
        experience: resumeInfo.experience,
        education: resumeInfo.education,
        skills: resumeInfo.skills,
        skillCategories: resumeInfo.skillCategories,
        projects: projectlist
      })

      if(res){
      setloading(false)
      toast.success("Saved Successfully" ,{className:"!bg-green-500 !text-white"})
      nextBtnState(false)
      }

    } catch (error) {
      toast.error("Error while saving",{className:"!bg-red-500 !text-white"})
    }finally{
      setloading(false)
      nextBtnState(false)
    }
  }

  const handleRichTextEditor=(e,name,index)=>{
    const updatelist=[...projectlist]
    const {value}=e.target
    updatelist[index][name]=value
    setprojectlist(updatelist)
  }

  return (
     <div className='shadow-lg border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Projects</h2>
      </div>

        <div>
          {projectlist.map((proj,index)=>(
            <div key={index}>
              <div className='border border-primary p-2 md:p-5 my-5 md:my-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 border p-5 my-5'>
                <div>
                  <label className="font-medium ">Project Title</label>
                  <Input value={projectlist[index].title} name="title" placeholder="Ex:Resumind" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">Project Link</label>
                  <Input value={projectlist[index].link} name="link" placeholder="Ex:https://github.com/..." onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Start Date</label>
                  <Input value={projectlist[index].startDate} type="month" name="startDate" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">End Date</label>
                  <Input value={projectlist[index].endDate} type="month" name="endDate" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div className='md:col-span-2'>
                  <label className="font-medium ">Description</label>
                  <RichTextEditor val={projectlist[index].description} handleRichTextEditor={(e)=>handleRichTextEditor(e,'description',index)}/>
                  </div>

              </div>
              <div className='flex justify-between'>
                <div className='flex gap-5 justify-between items-center'>
              <Button type='button' onClick={handleAddMore} variant="outline" className='mt-5 hover:text-primary border-1 border-green-400 hover:scale-105 active:scale-100' >Add more +</Button>
              <Button type='button' onClick={()=>removeProject(index)} variant='outline' className='mt-5 hover:text-red-500 border-1 border-red-500 hover:scale-105 active:scale-100'>Remove</Button>
                </div>

              </div>

              </div>

            </div>
          ))}
        </div>

      <div className='flex justify-end'>
            <Button type='submit' onClick={onSave} className='mt-5' >{loading?<Loader2 className='animate-spin'/>:"Save All"}</Button>
      </div>

    </div>
  )
}

export default AddProjects
