import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { Input } from '@/components/ui/input'

const EducationDetails = ({nextBtnState}) => {

  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)

  useEffect(()=>{
    nextBtnState(false)
  },[])
  
  const educationfields={
    universityName:'',
    major:'',
    startDate:'',
    endDate:'',
    degree:'',
    description:''  
  }
  const [educationDetails, seteducationDetails] = useState(resumeInfo.education.length>0?resumeInfo.education:[educationfields])
  
  useEffect(()=>{
    setresumeInfo({...resumeInfo,education:educationDetails})
  },[educationDetails])

  const handleAddMore=()=>{
    seteducationDetails([...educationDetails,educationfields])
  }

  const handleChange=(index,event)=>{
    const {name,value}=event.target
    const updatelist=[...educationDetails]
    updatelist[index][name]=value
    seteducationDetails(updatelist)
  }

  const handleRichTextEditor=(e,name,index)=>{
    const updatedDESP=[...educationDetails]
    updatedDESP[index][name]=e.target.value
    seteducationDetails(updatedDESP)
  }

  const removeEducation=(currindex)=>{
    if(educationDetails.length===1) return;
    let updatedEdulist=[...educationDetails]
    updatedEdulist=updatedEdulist.filter((edu,idx)=>currindex!=idx)
    seteducationDetails(updatedEdulist)
  }

  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Education Details</h2>
      </div> 

        <div>
          {educationDetails.map((exp,index)=>(
            <div key={index}>
              <div className='border border-primary p-2 md:p-5  my-5 md:my-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 border p-5 my-5'>
                <div>
                  <label className="font-medium ">University Name</label>
                  <Input value={educationDetails[index].universityName}  name="universityName" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                <div>
                  <label className="font-medium ">Degree</label>
                  <Input value={educationDetails[index].degree} name="degree" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>
 
                <div>
                  <label className="font-medium ">Major In</label>
                  <Input value={educationDetails[index].major} name="major" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Start Date</label>
                  <Input value={educationDetails[index].startDate} type="month" name="startDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">End Date</label>
                  <Input value={educationDetails[index].endDate} type="month" name="endDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div className='md:col-span-2'>
                  <label className="font-medium ">Description</label>
                  <RichTextEditor val={educationDetails[index].description} handleRichTextEditor={(e)=>handleRichTextEditor(e,'description',index)}/>
                  </div>
                
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-5 justify-between items-center'>
              <Button type='button' onClick={handleAddMore} variant="outline" className='mt-5 hover:text-primary border-1 border-green-400 hover:scale-105 active:scale-100' >Add more +</Button>
              <Button type='button' onClick={()=>removeEducation(index)} variant='outline' className='mt-5 hover:text-red-500 border-1 border-red-500 hover:scale-105 active:scale-100'>Remove</Button>
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default EducationDetails
