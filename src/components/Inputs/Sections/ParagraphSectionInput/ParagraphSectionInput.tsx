import { NewParagraphSection, ParagraphSection, emptyParagraphSection } from 'api/models'
import TextAreaInput from 'components/Inputs/TextAreaInput/TextAreaInput'
import TextInput from 'components/Inputs/TextInput/TextInput'
import React, { useEffect, useState } from 'react'

interface Props {
  text: string,
  heading?: string
  onChange: (sec: ParagraphSection | NewParagraphSection) => void
}

const ParagraphSectionInput = ({text, heading, onChange}: Props) => {


  const [sec, setSec] = useState<ParagraphSection | NewParagraphSection>(emptyParagraphSection)

  useEffect(() => {
    onChange(sec)
    console.log("paragraphSectionInput component vvvnnnnuuuttttrrriiiii: ", sec)  
  }, [sec])
  

  return (
    <div className='section-input paragraph-section-input'>
      <TextInput onChange={(text) => setSec({...sec, heading: text})} label='Heading' def={heading}/>
      <TextAreaInput onChange={(text) => setSec({...sec, text: text})} label='Paragraph' def={text} />
    </div>
  )

  
}

export default ParagraphSectionInput