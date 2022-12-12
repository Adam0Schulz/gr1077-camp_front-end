import { ParagraphSection as Paragraph } from '../../../api/models'
import { ReactNode } from 'react'
import './ParagraphSection.css'

interface Props {
  paragraph: Paragraph,
  row: number,
}

const ParagraphSection = ({ paragraph, row }: Props) => {

  return (
    <div style={{ gridRow: row }} className={'section-cont paragraph-section'}>
      <h4>{paragraph.heading}</h4>
      <p>{paragraph.text}</p>
    </div>
  )
}

export default ParagraphSection