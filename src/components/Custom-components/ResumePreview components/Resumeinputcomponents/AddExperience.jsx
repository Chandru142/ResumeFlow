import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import RichTextEditor from '../RichTextEditor'

const AddExperience = ({nextBtnState}) => {

  const experienceFields={
    title: '',
    companyName:'',
    city: '',
    state:'',
    startDate: '',
    endDate: '',
    workSummary:''
  }
  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)
  
  const [experiencelist, setexperiencelist] = useState(resumeInfo.experience.length>0?resumeInfo.experience:[experienceFields])

useEffect(()=>{
  setresumeInfo((prev=>(
    {...prev,experience:experiencelist})
  ))
},[experiencelist])

useEffect(()=>{
  nextBtnState(false)
},[])

  const handleChange=(index,event)=>{
    const {name,value}=event.target
    const updateList=[...experiencelist]
    updateList[index][name]=value
    setexperiencelist(updateList)
  }

  const removeExperience=(currindex)=>{
    if(experiencelist.length===1)return;
    let updateList= [...experiencelist]
    updateList=updateList.filter((exp,index)=>currindex!=index)
    setexperiencelist(updateList)
  }

  const handleAddMore=()=>{
    setexperiencelist([...experiencelist,experienceFields])
  }

  const handleRichTextEditor=(e,name,index)=>{
    const updatelist=[...experiencelist]
    const {value}=e.target
    updatelist[index][name]=value
    setexperiencelist(updatelist)
  }

  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Experience</h2>
      <Button variant="outline" className={"hover:text-primary hidden"}>Generate Experience</Button>
      </div> 

        <div>
          {experiencelist.map((exp,index)=>(
            <div key={index}>
              <div className='border border-primary p-2 md:p-5  my-5 md:my-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 border p-5 my-5'>
                <div>
                  <label className="font-medium ">Position Title</label>
                  <Input value={experiencelist[index].title} name="title" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">Company Name</label>
                  <Input  value={experiencelist[index].companyName} name="companyName" placeholder="Ex:Microsoft" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">City</label>
                  <Input  value={experiencelist[index].city} name="city" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">State</label>
                  <Input  value={experiencelist[index].state} name="state" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Start Date</label>
                  <Input  value={experiencelist[index].startDate} type="month" name="startDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">End Date</label>
                  <Input   value={experiencelist[index].endDate}type="month" name="endDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div className='md:col-span-2'>
                  <label className="font-medium ">WorkSummary</label>
                  <RichTextEditor val={experiencelist[index].workSummary} handleRichTextEditor={(e)=>handleRichTextEditor(e,'workSummary',index)}/>
                  </div>
                
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-5 justify-between items-center'>
              <Button type='button' onClick={handleAddMore} variant="outline" className='mt-5 hover:text-primary border-1 border-green-400 hover:scale-105 active:scale-100' >Add more +</Button>
              <Button type='button' onClick={()=>removeExperience(index)} variant='outline' className='mt-5 hover:text-red-500 border-1 border-red-500 hover:scale-105 active:scale-100'>Remove</Button>
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default AddExperience
