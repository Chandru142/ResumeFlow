import React, { act, useState } from 'react'
import Personaldetails from './Resumeinputcomponents/Personaldetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowRightCircle, Home, LayoutGrid } from 'lucide-react'
import Summary from './Resumeinputcomponents/Summary'
import AddExperience from './Resumeinputcomponents/AddExperience'
import EducationDetails from './Resumeinputcomponents/EducationDetails'
import Skills from './Resumeinputcomponents/Skills'
import AddProjects from './Resumeinputcomponents/AddProjects'
import { Link, Links, Navigate, useParams, useNavigate } from 'react-router-dom'
import Themecolor from './Resumeinputcomponents/Themecolor'
import TemplateSelector from './Resumeinputcomponents/TemplateSelector'
import PersonalFormSkeleton from '@/components/ResumeLoadcomponent/PersonalFormSkeleton'
import { toast } from 'sonner'

const ResumeForm = ({resumefetchDB}) => {

  const [activeformsection, setactiveformsection] = useState(1)

  const [nextButton, setnextButton] = useState(true)

  const param=useParams()
  const navigate=useNavigate()
  
  return (
    <>
    <div>

      <div className='flex justify-between'>
        <div className='flex md:gap-5 '>
        <Link to="/dashboard">
          <Button className={"hidden md:flex"}><Home/>Home</Button>
        </Link>
      <TemplateSelector/>
      <Themecolor/>

        </div>

      <div className='flex gap-5 '>
        {activeformsection>1 && (  <Button onClick={()=>setactiveformsection(activeformsection-1)}><ArrowLeft/></Button>) }
    
      {activeformsection==6 ?(
        <Button onClick={()=>{
          if(nextButton){
            toast.error("Save your progress first")
          }else{
            navigate(`/myresume/${param.resumeId}/view`)
          }
        }}>Download & Share<ArrowRight/></Button>
      ) : (
        <Button disabled={nextButton} onClick={()=>setactiveformsection(activeformsection+1)}>Next<ArrowRight/></Button>
      )}
      </div>

      </div>

          {/* personal details */}
         {activeformsection==1 && (resumefetchDB?<PersonalFormSkeleton/>:<Personaldetails nextBtnState={setnextButton}/>)}

          {/* summary details */}
         
        {activeformsection==2 && <Summary nextBtnState={setnextButton}/>}

        {/* experience details */}
       {activeformsection==3 && <AddExperience nextBtnState={setnextButton}/>}
        {/* education details */}
       {activeformsection==4 && <EducationDetails nextBtnState={setnextButton}/>}
        {/* skills details */}
        {activeformsection==5 && <Skills nextBtnState={setnextButton}/>}

        {/* projects details */}
        {activeformsection==6 && <AddProjects nextBtnState={setnextButton}/>}
    </div>

    </>
  )
}

export default ResumeForm