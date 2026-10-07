import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext } from 'react'
import formatDate from '@/utils/formatDate'

const categoryLabels = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  databases: 'Databases',
  ai: 'AI & Integrations',
  tools: 'Tools & Platforms'
}

const ProfessionalPreview = () => {
  const { resumeInfo } = useContext(ResumeInfoContext)
  const tc = resumeInfo?.themeColor || '#000'
  const cats = resumeInfo?.skillCategories || {}

  const hasCategories = Object.values(cats).some(v => v?.trim())

  return (
    <div className='shadow-lg print:shadow-none p-10' style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <h2 className='text-center font-bold text-2xl uppercase tracking-wide'>
        {resumeInfo.firstName} {resumeInfo.lastName}
      </h2>
      <h2 className='text-center text-sm text-gray-600 mt-1'>{resumeInfo.jobTitle}</h2>

      <div className='flex justify-center gap-2 text-xs text-gray-600 mt-3 mb-4'>
        <span>{resumeInfo.phone}</span>
        <span className='text-gray-400'>|</span>
        <span>{resumeInfo.email}</span>
        <span className='text-gray-400'>|</span>
        <span>{resumeInfo.address || 'Bengaluru, India'}</span>
      </div>

      <h3 className='text-xs font-bold uppercase tracking-wider mt-4'>Professional Summary</h3>
      <hr className='border-t my-1' style={{ borderColor: tc }} />
      <p className='text-xs text-justify leading-relaxed'>{resumeInfo.summary}</p>

      <h3 className='text-xs font-bold uppercase tracking-wider mt-4'>Technical Skills</h3>
      <hr className='border-t my-1' style={{ borderColor: tc }} />
      <div className='text-xs leading-relaxed'>
        {hasCategories ? (
          Object.entries(categoryLabels).map(([key, label]) => {
            const val = cats[key]?.trim()
            if (!val) return null
            return (
              <p key={key}>
                <span className='font-bold'>{label}: </span>{val}
              </p>
            )
          })
        ) : (
          <p><span className='font-bold'>Skills: </span>
            {resumeInfo?.skills?.map(s => s.name).join(', ')}
          </p>
        )}
      </div>

      <h3 className='text-xs font-bold uppercase tracking-wider mt-4'>Experience</h3>
      <hr className='border-t my-1' style={{ borderColor: tc }} />
      {resumeInfo?.experience?.map((exp, i) => (
        <div key={i} className='mb-3'>
          <div className='flex justify-between items-baseline'>
            <h4 className='text-sm font-bold'>{exp.title}</h4>
            <span className='text-xs text-gray-500'>{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
          </div>
          <p className='text-xs italic text-gray-600'>{exp.companyName}, {exp.city}, {exp.state}</p>
          <div className='text-xs text-justify mt-1 pl-2 leading-relaxed resume-previewPoints'
               dangerouslySetInnerHTML={{__html: exp.workSummary}} />
        </div>
      ))}

      <h3 className='text-xs font-bold uppercase tracking-wider mt-4'>Projects</h3>
      <hr className='border-t my-1' style={{ borderColor: tc }} />
      {resumeInfo?.projects?.map((proj, i) => (
        <div key={i} className='mb-3'>
          <div className='flex items-baseline gap-2'>
            <h4 className='text-sm font-bold'>{proj.title}</h4>
            {proj.link && (
              <a href={proj.link} className='text-xs underline' style={{color: tc}} target='_blank' rel='noopener noreferrer'>GitHub</a>
            )}
          </div>
          <div className='text-xs text-justify mt-0.5 pl-2 leading-relaxed resume-previewPoints'
               dangerouslySetInnerHTML={{__html: proj.description}} />
        </div>
      ))}

      <h3 className='text-xs font-bold uppercase tracking-wider mt-4'>Education</h3>
      <hr className='border-t my-1' style={{ borderColor: tc }} />
      {resumeInfo?.education?.map((ed, i) => (
        <div key={i} className='mb-2'>
          <div className='flex justify-between'>
            <h4 className='text-sm font-bold'>{ed.universityName}</h4>
            <span className='text-xs text-gray-500'>{formatDate(ed.startDate)} - {formatDate(ed.endDate)}</span>
          </div>
          <p className='text-xs text-gray-600'>{ed.degree} in {ed.major}</p>
        </div>
      ))}
    </div>
  )
}

export default ProfessionalPreview
