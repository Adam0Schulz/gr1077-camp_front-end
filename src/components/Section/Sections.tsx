import { Page } from 'api/models'
import './Sections.css'
import ImageSection from './ImageSection/ImageSection'
import LinkSection from './LinkSection/LinkSection'
import ParagraphSection from './ParagraphSection/ParagraphSection'

interface Props {
  page: Page,
}

const Sections = ({ page }: Props) => {

  const sections = [...(page.imageSectionSet), ...(page.linkSectionSet), ...(page.paragraphSectionSet)]
  const orderedSections = sections.sort((a, b) => a.seq - b.seq)

  return (
    <div className='sections-cont'>
      {orderedSections.map((section, index) => {
        if ('heading' in section) {
            return <>
                    <div style={{gridRow: index + 1}} className={'section__line section__line--' + (index % 2 == 0 ? 'even' : 'odd')}></div>
                    <ParagraphSection row={index + 1} paragraph={section} />
                  </>
          
          
        }
        if ('link' in section) {
            return <>
                    <div style={{gridRow: index + 1}} className={'section__line section__line--' + (index % 2 == 0 ? 'even' : 'odd')}></div>
                    <LinkSection row={index + 1} link={section} />
                  </>
        }
        if ('image' in section) {
            return <>
                    <div style={{gridRow: index + 1}} className={'section__line section__line--' + (index % 2 == 0 ? 'even' : 'odd')}></div>
                    <ImageSection row={index + 1} image={section} />
                  </>
          
        }
        return <></>
      })}
    </div>
  )
}

export default Sections