import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext } from 'react'
import { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

const RichTextEditor = ({handleRichTextEditor,val}) => {

  
  
  const [value, setvalue] = useState(val)


  return (

    <EditorProvider>
    <Editor value={value} onChange={(e)=>{setvalue(e.target.value)
                                      handleRichTextEditor(e)}
    }>
      <Toolbar>
          
          <BtnBulletList />
          
      </Toolbar>
    </Editor>
    </EditorProvider>
  )
}

export default RichTextEditor