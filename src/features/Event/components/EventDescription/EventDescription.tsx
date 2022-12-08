import {Event} from 'api/models'
import eventDescriptionText from 'data/eventDescriptionText.json'
import {useLocationByRoomId} from "../../hooks/UseLocations";
import './EventDescription.css'

interface Props {
    event: Event
}

export const EventDescription = ({event}: Props) => {
    const {data: location, isLoading, isError} = useLocationByRoomId(event.room.id)
    //const date: Date = event.date;
    //toDateString?
    return (
        <div style={{margin: "1em 9.5em"}}>
            <div className={"event-description-line"}>
                {eventDescriptionText.time}
            </div>
            <h5>
                {event.date + " " + "from " + event.startTime + " until " + event.endTime}
            </h5>
            <div className={"event-description-line"}>
                {eventDescriptionText.place}
            </div>
            <h5>
                {"room " + event.room.name + " at " + location?.address}
            </h5>
            <div className={"event-description-line"}>
                {eventDescriptionText.contact}
            </div>
            <div>
                {eventDescriptionText.welcome}
            </div>
        </div>
    )

}