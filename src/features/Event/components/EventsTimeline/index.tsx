import Filter from 'components/Filter';
import { EventCard } from 'features/Event';
import { useState } from 'react'
import { useEventsByState } from 'features/Event/hooks/UseAllEvents';
import './style.css'
import { EventState } from 'api/enums';

const EventsTimeline = () => {

    const { data: pastEvents,
        isLoading: isPastLoading,
        isError: isPastError } = useEventsByState(EventState.PAST)

    const { data: upcomingEvents,
        isLoading: isUpcomingLoading,
        isError: isUpcomingError } = useEventsByState(EventState.UPCOMING)


    const [state, setState] = useState<EventState>(EventState.UPCOMING)
    let row = 0

    if (isPastLoading || isUpcomingLoading) return <>Loading...</>

    if (isPastError || isUpcomingError) return <>Oopsie! Something went wrong!</>

    console.log(state)

    return (
        <div className="event-timeline">
            <Filter options={[EventState.UPCOMING, EventState.PAST]} action={setState} />
            {/* not very nice way to do this - if there are more states this will break down */}
            {(state == EventState.UPCOMING) ? upcomingEvents?.map(event => {
                row += 1
                return (<EventCard key={event.id} size='large' event={event} state={state} row={row} />)
            }
            ) : pastEvents?.map(event => {
                row += 1
                return (<EventCard key={event.id} size='large' event={event} state={state} row={row} />)
            }
            )
            }
        </div>
    )
}

export default EventsTimeline