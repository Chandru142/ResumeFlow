import React, { useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { toast } from 'sonner'
import AiModel from './../../../../../service/AiModel'
import SummaryLoadSkeleton from '@/components/ResumeLoadcomponent/SummaryLoadSkeleton'
import CopyButton from '../CopyButton'

const Summary = ({nextBtnState}) => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)

  const [summarytext, setsummarytext] = useState(resumeInfo.summary || "")
  const [summaryloading, setsummaryloading] = useState(false)
  const [generatedSummary, setgeneratedSummary] = useState([])

  useEffect(()=>{
    nextBtnState(false)
  },[])

  useEffect(()=>{
     setresumeInfo({ ...resumeInfo, summary: summarytext })
  },[summarytext])

const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summary for 3 experience level, Fresher Level and Mid level and Senior Level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
const GenerateAiSummary=async()=>{
  setsummaryloading(true)
  try {
    const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle)
    const res=await AiModel.generateAicontent(PROMPT)
    const toJson=JSON.parse(res.text)
     setgeneratedSummary(toJson)
  } catch (error) {
   console.error("Error getting AI response",error)  
   toast.error("Unable to generate Summary")
  }finally{
    setsummaryloading(false)
  }
}
  
  return (
    <div className='shadow-lg  border-t-5 h-auto border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Summary</h2>
        <button onClick={()=>GenerateAiSummary()} variant="default" className="cursor-pointer relative active:scale-95 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-background dark:bg-background rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent'>
            Generate Summary</span>  </button>
      </div> 
      <div>
        <Textarea value={resumeInfo.summary} onChange={(e)=>{setsummarytext(e.target.value)}}/>
      </div>

      {summaryloading?
      <SummaryLoadSkeleton/>:(

      <div className='py-6'>
        {generatedSummary.map((item,index)=>(

        <div key={index} className=' p-3.5 mb-4 rounded-2xl bg-secondary border shadow-md'>
          <div className='flex justify-between'>
            
          <h2 className='text-xl py-1.5 font-bold text-foreground' style={{
            color:resumeInfo.themeColor
          }}>{item.experience_level}</h2>

          <CopyButton item={item}/>
          </div>
          <div className='text-sm text-foreground font-semibold'>{item.summary}</div>
        </div>

        ))}

      </div>
      )}

    </div>
  )
}

export default Summary
