// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import { get } from "api/calls/Events";
import { Event } from "api/models";
import { EventCard } from "features/Event";
import { useEffect, useState } from "react";
import './style.css'

const Events = () => {
    const [ events, setEvents ] = useState<Event[] | null>(null)
    useEffect(() => {
        async function getThingy() {
            setEvents(await get());
        }
        getThingy()
        
    }, [])
    return (
        <>
            <div>
                <h2>Events</h2>
                {/* input component here */}
            </div>
            <div className="splidetrack">
                { events && events.map(event => 
                <EventCard key={event.id} size='small' event={event} /> 
                )}
            </div>
            <div className="grid">
                { events && events.map(event => 
                <EventCard key={event.id} size='large' event={event} /> 
                )}
            </div>
                            
                
            
            
        </>
    )
}

export default Events