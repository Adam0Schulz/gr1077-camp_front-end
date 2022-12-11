import { BlogPost, ImageSection, LinkSection, NewImageSection, NewLinkSection, NewParagraphSection, Page, ParagraphSection } from 'api/models'
import ImageSectionInput from 'components/Inputs/Sections/ImageSectionInput/ImageSectionInput'
import LinkSectionInput from 'components/Inputs/Sections/LinkSectionInput/LinkSectionInput'
import ParagraphSectionInput from 'components/Inputs/Sections/ParagraphSectionInput/ParagraphSectionInput'
import SmallHeading from 'components/SmallHeading/SmallHeading'
import { useState } from 'react'
import './Description.css'
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided, DropResult } from 'react-beautiful-dnd'
import dragIcon from 'assets/icons/drag_gray.svg'
import trashIcon from 'assets/icons/trash.svg'

interface Props {
    page?: Page
}

type SectionItem = 
ImageSection | 
ParagraphSection | 
LinkSection | 
NewImageSection | 
NewParagraphSection | 
NewLinkSection

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
    const [sections, setSections] = useState<SectionItem[]>(defaultSections)
    const [count, setCount] = useState(0)

    const getCount = (): number => {
        setCount(count + 1)
        console.log(sections)
        return count
    }
    
    const renderSectionInput = (section: SectionItem) => {
        if ('image' in section) {
            return <ImageSectionInput image={section.image} />
        } else if ('link' in section) {
            return <LinkSectionInput text={section.text} link={section.link} />
        } else if ('text' in section) {
            // here it could be a problem that I'm checking by heading
            return <ParagraphSectionInput text={section.text} heading={section.heading} />
        }
    }

    const handleOnDragEnd = (result: DropResult) => {
        if( result.destination ) {
            const items = Array.from(sections)
            const [reorderedItem] = items.splice(result.source.index, 1)
            console.log('destination ',result.destination)
            items.splice(result.destination.index, 0 , reorderedItem)
            setSections(items)
        }
    }

    const updateSectionsSequence = () => {
        const savingSections = sections.map((section, index) => {
            section.seq = index + 1
            return section
        })
        console.log('sections to be saved',savingSections)
    }

    const deleteSection = (indexToRemove: number) => {
        const updatedSections = sections.filter((section, index) => index != indexToRemove)
        setSections(updatedSections)
    }
    
    return (
        <div className='description'>
            <SmallHeading text='description' />
            
            <div className='description__section-inputs'>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='sectionInputs'>
                        {(provided: DroppableProvided) => (
                           <ul {...provided.droppableProps} ref={provided.innerRef}>
                                {sections.map((section, index) => (
                                    <Draggable key={section.seq} draggableId={section.seq.toString()} index={index}>
                                        {(provided: DraggableProvided) => (
                                            <li className='description__draggable-li' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <img className='description__icon description__section-input__drag-icon' src={dragIcon} />
                                                {renderSectionInput(section)}
                                                <img className='description__icon description__section-input__x-icon' src={trashIcon} onClick={e => deleteSection(index)} />
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                           </ul>
                        )}

                    </Droppable>
                </DragDropContext>
            </div>
            <div className='description__btns'>
                <button onClick={e => setSections([...sections, {...emptyImageSection, seq: getCount()}])}>Add Image</button>
                <button onClick={e => setSections([...sections, {...emptyParagraphSection, seq: getCount()}])}>Add Paragraph</button>
                <button onClick={e => setSections([...sections, {...emptyLinkSection, seq: getCount()}])}>Add Link</button>
                <button onClick={e => console.log('print: ',sections)}> print sections array</button>
                <button onClick={e => updateSectionsSequence()}> print sections to be saved</button>
            </div>

        </div>
    )
}

export default Description