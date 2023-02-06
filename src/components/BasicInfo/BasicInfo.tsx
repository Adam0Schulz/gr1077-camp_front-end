import './BasicInfo.css'
import Separator from "components/Separator/Separator"
import TextInput from "components/Inputs/Basic/TextInput/TextInput"
import ImageInput from "components/Inputs/Basic/ImageInput/ImageInput"
import SelectGroup from "components/Inputs/Select/SelectGroup/SelectGroup"
import TimeInput from "components/Inputs/Basic/TimeInput/TimeInput"
import DateInput from "components/Inputs/Basic/DateInput/DateInput"
import SmallHeading from 'components/SmallHeading/SmallHeading'
import { useAtom } from 'jotai'
import { newEvent } from 'lib/atomStore'
import { useGetAllResearchers } from 'features/Researcher/hooks/useGetAllResearchers'
import { useGetAllExternalResearchers } from 'features/Researcher/hooks/useGetAllExternalResearchers'
import SelectInput from 'components/Inputs/Select/SelectInput/SelectInput'
import { ExternalResearcher, Researcher, Time } from 'api/models'
import { useState } from 'react'
import { useGetAvailableRooms } from 'features/Room/hooks/useGetAvailableRooms'

const BasicInfo = () => {

    const [event, setEvent] = useAtom(newEvent)

    const { data: researchers, 
            isLoading: isResearchersLoading, 
            isError: isResearchersError} = useGetAllResearchers()  

    const { data: ExternalResearchers,
            isLoading: isExternalResearchersLoading,
            isError: isExternalResearchersError} = useGetAllExternalResearchers()

    const [RoomDisabled, setRoomDisabled] = useState({date: false, start: false, end: false})

    const {data: rooms,
            isLoading: isRoomsLoading,
            isError: isRoomsError} = useGetAvailableRooms([
                {name: 'date', value: RoomDisabled.date ? (event.date?.getFullYear() + '-' + event.date?.getMonth() + '-' + event.date?.getDate() as string) : ''},
                {name: 'start', value: RoomDisabled.start ? (event.startTime as string) : ''},
                {name: 'end', value: RoomDisabled.end ? (event.endTime as string) : ''}
            ])
    
    const getRooms = () => {
        if (rooms) {
            return rooms.map(room => {return {id: room.id, text: room.name}})
        }
        return []
    }

   

    return (
        <div className="basic-info">
            <SmallHeading text={'basic info'} />
            <div className="basic-info__body">
                <div className="basic-info__header-info">

                    <TextInput label="Title" onChange={(title) => setEvent({...event, name: title})} />
                    <ImageInput onChange={(image) => setEvent({...event, image: { url: image.url, caption: image.caption}})} />

                </div>
                <div className="basic-info__sidebar">
                    <div className="basic-info__datetime">
                        <DateInput label="Date" onChange={(date) => {setEvent({...event, date: date}); setRoomDisabled({...RoomDisabled, date: date ? true : false})}}/>
                        <TimeInput label="Start time" onChange={(time) => {setEvent({...event, startTime: time}); setRoomDisabled({...RoomDisabled, start: time ? true : false})}} />
                        <TimeInput label="End time" onChange={(time) => {setEvent({...event, endTime: time}); setRoomDisabled({...RoomDisabled, end: time ? true : false})}}/>
                    </div>

                    <SelectInput disabled={!(RoomDisabled.date && RoomDisabled.start && RoomDisabled.end)} label={'Room'} defaultOption={'Select a room'}  options={getRooms()}/>

                    {isResearchersLoading && <>Loading researchers...<br /></>}
                    {isResearchersError && <>Couldn't load researchers<br /></>}
                    {researchers && 
                    <SelectGroup type="researcher" options={researchers} onSelect={selectedOptions => setEvent({...event, researcherSet: selectedOptions as unknown as Researcher[]})} />}

                    {isExternalResearchersLoading && <>Loading external researchers...<br /></>}
                    {isExternalResearchersError && <>Couldn't load external researchers<br /></>}
                    {ExternalResearchers && 
                    <SelectGroup type="external researcher" options={ExternalResearchers} onSelect={selectedOptions => setEvent({...event, externalResearcherSet: selectedOptions as unknown as ExternalResearcher[]})}/>}
                </div>

            </div>
        </div>
    )
}

export default BasicInfo