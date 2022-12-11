import { BlogPost, ImageSection, LinkSection, NewImageSection, NewLinkSection, NewParagraphSection, Page, ParagraphSection } from 'api/models'
import ImageSectionInput from 'components/Inputs/Sections/ImageSectionInput/ImageSectionInput'
import LinkSectionInput from 'components/Inputs/Sections/LinkSectionInput/LinkSectionInput'
import ParagraphSectionInput from 'components/Inputs/Sections/ParagraphSectionInput/ParagraphSectionInput'
import SmallHeading from 'components/SmallHeading/SmallHeading'
import { useState } from 'react'
import './Description.css'
import { DragDropContext } from 'react-beautiful-dnd'

interface Props {
    page?: Page
}

const Description = ({page}: Props) => {

    const emptyImageSection: NewImageSection = {
        seq: 0,
        image: {
            url: '',
            caption: ''
        },
        altText: ''
    }
    const emptyParagraphSection: NewParagraphSection = {
        seq: 0,
        heading: '',
        text: ''
    }
    const emptyLinkSection: NewLinkSection = {
        seq: 0,
        text: '',
        link: ''
    }

    const defaultSections = page ? [...(page.imageSectionSet), ...(page.linkSectionSet), ...(page.paragraphSectionSet)] : []
    const [sections, setSections] = useState<(ImageSection | 
                                            ParagraphSection | 
                                            LinkSection | 
                                            NewImageSection | 
                                            NewParagraphSection | 
                                            NewLinkSection)[]>(defaultSections)
    const [count, setCount] = useState(0)

    const getCount = (): number => {
        setCount(count + 1)
        console.log(sections)
        return count
    }
    
    
    return (
        <div className='description'>
            <SmallHeading text='description' />
            
            <div className='description__section-inputs'>
                {sections.map((section) => {
                    if ('image' in section) {
                        return <ImageSectionInput image={section.image} />
                    } else if ('link' in section) {
                        return <LinkSectionInput text={section.text} link={section.link} />
                    } else if ('text' in section) {
                        // here it could be a problem that I'm checking by heading
                        return <ParagraphSectionInput text={section.text} heading={section.heading} />
                    }
                    return <></>
                })}
            </div>
            <div className='description__btns'>
                <button onClick={e => setSections([...sections, {...emptyImageSection, seq: getCount()}])}>Image</button>
                <button onClick={e => setSections([...sections, {...emptyParagraphSection, seq: getCount()}])}>Paragraph</button>
                <button onClick={e => setSections([...sections, {...emptyLinkSection, seq: getCount()}])}>Link</button>

            </div>

        </div>
    )
}

export default Description