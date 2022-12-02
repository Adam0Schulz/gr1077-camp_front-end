// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import { get } from "api/calls/Events";
import { Event } from "api/models";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import EventsTimeline from "features/Event/components/EventsTimeline";
import { useEffect, useState } from "react";
import './style.css'

const Events = () => {
    const [events, setEvents] = useState<Event[] | null>(null)
    let row = 0
    useEffect(() => {
        async function getThingy() {
            setEvents(await get());
        }
        getThingy()

    }, [])
    return (
        <>
        <div className="page-cont">
            <Navbar activePage='events' />
            <div className="page-heading">
                <h2>Events</h2>
                {/* input component here */}
                <div>
                    <input type={'text'} />
                </div>

            </div>
            {/*<div className="splidetrack">
                { events && events.map(event => 
                <EventCard key={event.id} size='small' event={event} /> 
                )}
                </div>*/}
            <EventsTimeline />
        </div>
        <Footer />
        </>





        
    )
}

export default Events