import { ImageSection, LinkSection, NewImageSection, NewLinkSection, NewParagraphSection, Page, ParagraphSection, SectionItem, emptyImageSection, emptyLinkSection, emptyParagraphSection } from 'api/models'
import ImageSectionInput from 'components/Inputs/Sections/ImageSectionInput/ImageSectionInput'
import LinkSectionInput from 'components/Inputs/Sections/LinkSectionInput/LinkSectionInput'
import ParagraphSectionInput from 'components/Inputs/Sections/ParagraphSectionInput/ParagraphSectionInput'
import SmallHeading from 'components/SmallHeading/SmallHeading'
import { useEffect, useState } from 'react'
import './Description.css'
import trashIcon from 'assets/icons/trash.svg'

interface Props {
    page?: Page,
    onChange: (
        paragraphSecs:  (ParagraphSection | NewParagraphSection)[],
        linkSecs:       (LinkSection      | NewLinkSection)[],
        imageSecs:      (ImageSection     | NewImageSection)[]
    ) => void
}



const Description = ({ page, onChange }: Props) => {


    const [sections, setSections] = useState<SectionItem[]>(page != null ? [...(page.imageSectionSet), ...(page.linkSectionSet), ...(page.paragraphSectionSet)] : [])
    const [count, setCount] = useState(0)


    useEffect(() => {
        const secs = separateSections(sections)
        onChange(secs.pSecs, secs.lSecs, secs.iSecs)
    }, [sections])


    const separateSections = (secs: SectionItem[]) => {
        const paragraphSections: (ParagraphSection | NewParagraphSection)[] = []
        const linkSections: (LinkSection | NewLinkSection)[] = []
        const imageSections: (ImageSection | NewImageSection)[] = []

        secs.forEach(sec => {
            if ('image' in sec) {
                imageSections.push(sec)
            } else if ('link' in sec) {
                linkSections.push(sec)
            } else if ('text' in sec) {
                paragraphSections.push(sec)
            }
        })

        return { pSecs: paragraphSections, lSecs: linkSections, iSecs: imageSections }
    }

    const getCount = (): number => {
        setCount(count + 1)
        return count
    }

    const updateSectionsContent = (sec: SectionItem, index: number) => {
        const newSections = Array.from(sections)
        const seq = sections[index].seq
        const secTwo = { ...sec, seq: seq }
        newSections.splice(index, 1, secTwo)
        setSections(newSections)
    }

    const renderSectionInput = (section: SectionItem, index: number) => {
        if ('image' in section) {
            return <ImageSectionInput
                onChange={(sec) => {
                    updateSectionsContent(sec, index)
                }}
                image={section.image}
            />
        } else if ('link' in section) {
            return <LinkSectionInput
                onChange={(sec) => {
                    updateSectionsContent(sec, index)
                }

                }
                text={section.text}
                link={section.link}
            />
        } else if ('text' in section) {
            // here it could be a problem that I'm checking by heading
            console.log(section.text)
            return <ParagraphSectionInput
                
                text={section.text}
                heading={section.heading}
                onChange={(sec) => {
                    updateSectionsContent(sec, index)
                }
                }
            />
        }
    }


    const deleteSection = (indexToRemove: number) => {
        const updatedSections = sections.filter((section, index) => index != indexToRemove)
        setSections(updatedSections)
    }

    return (
        <div className='description'>
            <SmallHeading text='description' />

            <div className='description__section-inputs'>
                <ul>
                    {sections.map((section, index) => (
                        
                        <li className='description__draggable-li'>
                            {renderSectionInput(section, index)}
                            <img className='description__icon description__section-input__x-icon' src={trashIcon} onClick={e => deleteSection(index)} />
                        </li>
                            
                        
                    ))}    
                </ul>
            </div>
            <div className='description__btns'>
                <button onClick={e => setSections([...sections, { ...emptyImageSection, seq: getCount() }])}>Add Image</button>
                <button onClick={e => setSections([...sections, { ...emptyParagraphSection, seq: getCount() }])}>Add Paragraph</button>
                <button onClick={e => setSections([...sections, { ...emptyLinkSection, seq: getCount() }])}>Add Link</button>
            </div>

        </div>
    )
}

export default Description