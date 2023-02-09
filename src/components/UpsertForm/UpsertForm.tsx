import Description from 'components/Description/Description'
import './UpsertForm.css'
import BasicInfo from 'components/BasicInfo/BasicInfo'
import { BlogPost, DBObject, Event, ExternalResearcher, NewBlogPost, NewBlogPostObj, NewEvent, NewEventObj, Page, Researcher, Room } from 'api/models'
import { useEffect, useState } from 'react'
import { useCreateEvent, useUpdateEventById } from 'features/Event/hooks/UseAllEvents'
import TextInput from 'components/Inputs/TextInput/TextInput'
import ImageInput from 'components/Inputs/ImageInput/ImageInput'
import DateInput from 'components/Inputs/DateInput/DateInput'
import TimeInput from 'components/Inputs/TimeInput/TimeInput'
import SelectInput from 'components/Inputs/SelectInput/SelectInput'
import { useGetAvailableRooms } from 'features/Room/hooks/useGetAvailableRooms'
import SelectGroup from 'components/Inputs/SelectGroup/SelectGroup'
import { useGetAllResearchers } from 'features/Researcher/hooks/useGetAllResearchers'
import { useGetAllExternalResearchers } from 'features/Researcher/hooks/useGetAllExternalResearchers'
import { dateToString } from 'utils/DateConvertion'

interface Props {
    type: 'event' | 'post'
    object?: BlogPost | Event
}

const UpsertForm = ({ object, type }: Props) => {

    const { mutate: create } = useCreateEvent()
    const { mutate: edit } = useUpdateEventById(object?.id || 0)
    //const {mutate: update} = useUpdateEventById(eventId)
    // useCreateBlog()
    // useUpdateBlog()

    // Event
    const [upsertEvent, setUpsertEvent] = useState(NewEventObj)
    const { data: rooms, isLoading: roomsLoading } = useGetAvailableRooms(
        [
            {
                name: 'date',
                value: dateToString(new Date(upsertEvent.date))
            },
            {
                name: 'start',
                value: upsertEvent.startTime
            },
            {
                name: 'end',
                value: upsertEvent.endTime
            }
        ]
    )
    const { data: researchers, isLoading: researchersLoading } = useGetAllResearchers()
    const { data: externalResearchers, isLoading: externalResearchersLoading } = useGetAllExternalResearchers()

    // Blog post


    useEffect(() => {
        if (type === 'event' && object) setUpsertEvent(object as Event)
        // if(type === 'post' && object) setUpsertPost(object as BlogPost)
    }, [])

    console.log('upsert event: ', upsertEvent)

    return (
        <>
            {type == 'event' ?
                <>
                    <BasicInfo
                        left={
                            <>
                                <TextInput label='Title' def={upsertEvent.name} onChange={(text) => setUpsertEvent({ ...upsertEvent, name: text })} />
                                <ImageInput image={upsertEvent.image} onChange={(image) => setUpsertEvent({ ...upsertEvent, image: image })} />
                            </>
                        }
                        right={
                            <>
                                <div className='inline'>
                                    <DateInput label='Date' def={upsertEvent.date} onChange={date => setUpsertEvent({ ...upsertEvent, date: date })} />
                                    <TimeInput label='Start time' def={upsertEvent.startTime} onChange={time => setUpsertEvent({ ...upsertEvent, startTime: time })} />
                                    <TimeInput label='End time' def={upsertEvent.endTime} onChange={time => setUpsertEvent({ ...upsertEvent, endTime: time })} />
                                </div>
                                <SelectInput
                                    label='Room'
                                    /* defaultText={roomsLoading && rooms ? 'Loading...' : ((object as Event).room.name || 'Select a room')} */
                                    defaultText={roomsLoading ? 'Loading...' : (upsertEvent.room.name || 'Select a room')}
                                    disabled={rooms ? false : true}
                                    displayOptions={(rooms ? rooms.map(room => { return { id: room.id, text: room.name } }) : [])}
                                    objectOptions={rooms || []}
                                    onChange={(obj) => setUpsertEvent({ ...upsertEvent, room: obj as Room })}
                                />
                                <SelectGroup
                                    label='Researchers'
                                    defaultText={researchersLoading ? 'Loading...' : 'Select a researcher'}
                                    displayOptions={researchers ? researchers.map(researcher => { return { id: researcher.id, text: researcher.firstName + ' ' + researcher.lastName } }) : []}
                                    objectOptions={researchers || []}
                                    onChange={(array) => setUpsertEvent({ ...upsertEvent, researcherSet: array as Researcher[] })}
                                    defaultOptions={object ? (upsertEvent.researcherSet as DBObject[]) : undefined}
                                />
                                <SelectGroup
                                    label='External Researchers'
                                    defaultText={externalResearchersLoading ? 'Loading...' : 'Select an external researcher'}
                                    displayOptions={externalResearchers ? externalResearchers.map(researcher => { return { id: researcher.id, text: researcher.firstName + ' ' + researcher.lastName } }) : []}
                                    objectOptions={externalResearchers || []}
                                    onChange={(array) => setUpsertEvent({ ...upsertEvent, externalResearcherSet: array as ExternalResearcher[] })}
                                    defaultOptions={object ? (upsertEvent.externalResearcherSet as DBObject[]) : undefined}
                                />
                            </>
                        } />

                    {object ?
                        <Description page={object as Page} onChange={(pSecs, lSecs, iSecs) => setUpsertEvent({ ...upsertEvent, paragraphSectionSet: pSecs, linkSectionSet: lSecs, imageSectionSet: iSecs })} />
                        :
                        <Description onChange={(pSecs, lSecs, iSecs) => setUpsertEvent({ ...upsertEvent, paragraphSectionSet: pSecs, linkSectionSet: lSecs, imageSectionSet: iSecs })} />
                    }




                </>
                :
                <></>
            }

            {type == 'post' ? <BasicInfo
                left={
                    <>
                        <TextInput label='Title' />
                        <ImageInput />
                    </>
                }
                right={
                    <>
                        something
                    </>
                } />
                :
                <></>
            }


            <div className='upsert-form__btn-cont'>
                <button className='btn btn-s'>Cancel</button>
                <button className='btn btn-p' onClick={() => object ? edit((upsertEvent as Event)) : create(upsertEvent)}>Save</button>
            </div>
        </>
    )
}

export default UpsertForm