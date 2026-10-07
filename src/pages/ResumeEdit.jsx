import ResumeForm from '@/components/Custom-components/ResumePreview components/ResumeForm'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { TEMPLATES } from '@/data/templates'
import dummydata from '@/data/dummydata'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalApi from './../../service/globalApi'

const ResumeEdit = () => {

  const param=useParams()
  
  const [resumeInfo, setresumeInfo] = useState(dummydata)
  const [fetchresumedataDB, setfetchresumedataDB] = useState(false)

  useEffect(()=>{
    fetchresumeDetails()
  },[])

  const fetchresumeDetails=async()=>{
    setfetchresumedataDB(true)
    try {
      const res=await globalApi.fetchResumeDetails(param.resumeId)
      const data=res.data
      setresumeInfo({...resumeInfo,...data, 
      firstName: data.firstName!=null ? data.firstName : resumeInfo.firstName,
      lastName: data.lastName!=null ? data.lastName : resumeInfo.lastName,
      jobTitle: data.jobTitle!=null ? data.jobTitle : resumeInfo.jobTitle,
      address: data.address!=null ? data.address : resumeInfo.address,
      phone: data.phone!=null ? data.phone : resumeInfo.phone,
      email: data.email!=null ? data.email : resumeInfo.email,
      summary: data.summary!=null ? data.summary : resumeInfo.summary,
      themeColor: data.themeColor ? data.themeColor : resumeInfo.themeColor,
      templateId: data.templateId ? data.templateId : resumeInfo.templateId,
      skills: data.skills?.length > 0 ? data.skills : resumeInfo.skills,
      skillCategories: data.skillCategories ? data.skillCategories : resumeInfo.skillCategories,
      experience: data.experience?.length > 0 ? data.experience : resumeInfo.experience,
      education: data.education?.length > 0 ? data.education : resumeInfo.education,
      projects: data.projects?.length > 0 ? data.projects : resumeInfo.projects,})
      
    } catch (error) {
      console.error("Error fetching details from frontend")
    }finally{
      setfetchresumedataDB(false)
    }
  }

  const SelectedPreview = TEMPLATES[resumeInfo.templateId || 'default']?.preview || TEMPLATES.default.preview

  return (
    <>
    <ResumeInfoContext.Provider value={{resumeInfo,setresumeInfo}}>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 p-3 md:p-10 pt-18 md:pt-22 overflow-x-hidden'>

    <ResumeForm resumefetchDB={fetchresumedataDB}/>

    <SelectedPreview/>

    </div>
    </ResumeInfoContext.Provider>
    </>
  )
}

export default ResumeEdit
