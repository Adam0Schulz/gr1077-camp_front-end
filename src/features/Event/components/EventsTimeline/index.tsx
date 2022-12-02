import { get } from 'api/calls/Events'
import { Event } from "api/models";
import Filter from 'components/Filter';
import { EventCard } from 'features/Event';
import { useState, useEffect } from 'react'
import { urlToHttpOptions } from 'url';
import './style.css'

const EventsTimeline = () => {

    const [ events, setEvents ] = useState<Event[] | null>(null)
    const [ state, setState ] = useState<'upcoming' | 'past'>('upcoming')
    let row = 0
    useEffect(() => {
        async function getThingy() {
            setEvents(await get());
        }
        getThingy()
        
    }, [])

    return (
        <div className="event-timeline">
        <Filter options={['upcoming', 'past']} action={setState}/>
        { events && events.map(event => {
            row += 1
            return (<EventCard key={event.id} size='large' event={event} state={state} row={row}/>)
        }                
        )}
        </div>
    )
}

export default EventsTimeline