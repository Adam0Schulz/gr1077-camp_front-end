import { LinkSection as Link } from 'api/models'
import './LinkSection.css'

interface Props {
    link: Link,
    row: number,

}

const LinkSection = ({link, row}: Props) => {
  return (
    <a href={link.link} style={{gridRow: row}} className={'section-cont link-section'}>
      <p>{link.text}</p>
    </a>
  )
}

export default LinkSection