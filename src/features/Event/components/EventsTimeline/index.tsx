import Filter from 'components/Filter';
import { EventCard } from 'features/Event';
import { useState } from 'react'
import {useEventsByParams} from 'features/Event/hooks/UseAllEvents';
import './style.css'
import { EventState } from 'api/enums';

interface Props {
    searchKeyword: string;
}

const EventsTimeline = ({searchKeyword}: Props) => {
    const [state, setState] = useState<EventState>(EventState.UPCOMING)

    const { data: events,
        isLoading,
        isError } = useEventsByParams([{name: 'state', value: state}, {name: "keyword", value: searchKeyword}])



    let row = 0

    if (isLoading) return <>Loading...</>

    if (isError) return <>Oopsie! Something went wrong!</>

    console.log(state)

    return (
        <div className="event-timeline">
            <Filter options={[EventState.UPCOMING, EventState.PAST]} action={setState} def={state}/>
            {/* not very nice way to do this - if there are more states this will break down */}
            {events?.map(event => {
                row += 1
                return (<EventCard key={event.id} size='large' event={event} state={state} row={row} />)
            }
            )
            }
        </div>
    )
}

export default EventsTimeline