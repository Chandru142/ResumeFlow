import Header from '@/components/Custom-components/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { TEMPLATES } from '@/data/templates'
import dummydata from '@/data/dummydata'
import { DownloadIcon, Share2Icon, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalApi from './../../service/globalApi'
import ResumePreviewSkeleton from '@/components/ResumeLoadcomponent/ResumePreviewSkeleton'

import { pdf } from "@react-pdf/renderer";

const ResumeView = () => {
  const [resumeInfo, setresumeInfo] = useState(dummydata)
  const {resumeId}=useParams()
  const [resumeLoad, setresumeLoad] = useState(false)
  const [downloading, setdownloading] = useState(false)

useEffect(() => {
  const fetchData = async () => {
    setresumeLoad(true)
    const res = await globalApi.fetchResumeDetails(resumeId);
    const data = res.data;
    setresumeInfo({...resumeInfo,...data,
      templateId: data.templateId ? data.templateId : resumeInfo.templateId,
      skillCategories: data.skillCategories ? data.skillCategories : resumeInfo.skillCategories,
      projects: data.projects?.length > 0 ? data.projects : resumeInfo.projects,
    });
    setresumeLoad(false)
  };
  fetchData();
}, []);

 const handleDownload = async () => {
  setdownloading(true)
  try {
    const SelectedPDF = TEMPLATES[resumeInfo.templateId || 'default']?.pdf || TEMPLATES.default.pdf
    const blob = await pdf(<SelectedPDF resumeInfo={resumeInfo} />).toBlob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.pdf'
    a.click()
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Download failed', error)
  } finally {
    setdownloading(false)
  }
 }

const Share=async()=>{
  if(navigator.share){
    try {
      navigator.share({
        title:resumeInfo.title,
        text:"Check out my Resume Created using Resumind",
        url:`/myresume/${resumeId}/view`
      })
    } catch (error) {
      console.error("Error Sharing",error)
    }
  }else{
    alert("Your Browser does not support sharing")
  }
 }

  const SelectedPreview = TEMPLATES[resumeInfo.templateId || 'default']?.preview || TEMPLATES.default.preview

  return (
    <div className="min-h-screen  flex flex-col items-center py-0 ">
      <div className="print:hidden w-full flex flex-col items-center mb-6">
        <Header />
        <div className="flex justify-around md:justify-between pt-15 w-full max-w-3xl mt-4">
          <button
            disabled={resumeLoad || downloading}
            onClick={handleDownload}
            className={`px-4 py-2 text-white rounded-lg flex items-center gap-2 ${
              downloading || resumeLoad ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary active:scale-95 duration-200 transition-colors hover:bg-blue-600 cursor-pointer'
            }`}
          >
            {downloading ? (
              <><Loader2 size={17} className='animate-spin' /> Preparing PDF...</>
            ) : (
              <> Download<DownloadIcon size={17} /></>
            )}
          </button>

          <Button disabled={resumeLoad} onClick={Share} className="flex active:scale-95 duration-200 transition-colors hover:bg-blue-600 items-center gap-2">
            <Share2Icon size={18} /> Share
          </Button>
        </div>
      </div>

      <ResumeInfoContext.Provider value={{ resumeInfo, setresumeInfo }}>
        <div
          className="
            w-[95%] md:w-3/4 lg:w-2/3 
    shadow-lg bg-card rounded-lg 
    print:w-[210mm] print:max-h-[297mm] print:shadow-none print:rounded-none print:m-0
          "
        >
          {resumeLoad ? <ResumePreviewSkeleton /> : <SelectedPreview />}
        </div>
      </ResumeInfoContext.Provider>
    </div>
  );
}

export default ResumeView
