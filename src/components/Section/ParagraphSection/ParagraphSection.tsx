import { ParagraphSection as Paragraph } from 'api/models'
import './ParagraphSection.css'

interface Props {
  paragraph: Paragraph,
  row: number,
}

const ParagraphSection = ({paragraph, row}: Props) => {
  return (
    <div style={{gridRow: row}} className={'section-cont paragraph-section'}>
      <p>{paragraph.text}</p>
    </div>
  )
}

export default ParagraphSection