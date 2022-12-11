import TextAreaInput from 'components/Inputs/Basic/TextAreaInput/TextAreaInput'
import TextInput from 'components/Inputs/Basic/TextInput/TextInput'
import React from 'react'

interface Props {
  text: string,
  heading?: string
}

const ParagraphSectionInput = ({text, heading}: Props) => {
  return (
    <div className='section-input paragraph-section-input'>
      {heading && 
      <TextInput label='Heading' def={heading}/>
      }
      <TextAreaInput label='Paragraph' def={text} />
    </div>
  )
}

export default ParagraphSectionInput