import React, { useContext, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LayoutTemplate } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const templateOptions = [
  { id: 'default', name: 'Default', desc: 'Clean classic layout' },
  { id: 'professional', name: 'Professional', desc: 'Traditional professional format' },
]

const TemplateSelector = () => {
  const {resumeId}=useParams()
  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)
  const [selectedTemplate, setselectedTemplate] = useState(resumeInfo.templateId || 'default')

  const selectTemplate = async (templateId) => {
    setselectedTemplate(templateId)
    setresumeInfo({...resumeInfo, templateId})

    try {
      const res = await globalApi.updateResume(resumeId, {templateId})
      if(res){
        toast.success("Template Updated",{className:"!bg-green-500 !text-white"})
      }
    } catch (error) {
      toast.error("Failed Updating Template",{className:"!bg-red-500 !text-white"})
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <LayoutTemplate/> Template
        </Button>
      </PopoverTrigger>
      <PopoverContent className={"w-64 p-4"}>
        <div className='space-y-3'>
          {templateOptions.map((t) => (
            <div
              key={t.id}
              onClick={() => selectTemplate(t.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] active:scale-100 ${
                selectedTemplate === t.id
                  ? 'border-primary bg-primary/10 ring-1 ring-primary'
                  : 'border-border hover:border-muted-foreground'
              }`}
            >
              <h3 className='font-medium text-sm'>{t.name}</h3>
              <p className='text-xs text-gray-500 mt-0.5'>{t.desc}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default TemplateSelector
