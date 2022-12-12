// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EventsTimeline  from "../../features/Event/components/EventsTimeline/index";
import './style.css'
import {useState} from "react";


const Events = () => {

    const [searchKeyword, setSearchKeyword] = useState<string>("")

    return (
        <>
        <div className="page-cont">
            <Navbar activePage='events' />
            <div className="page-heading">
                <h2>Events</h2>
                {/* input component here */}
                <div>
             {/*//search and map in events by keyword input*/}
                    <input type={"text"} onChange={e => setSearchKeyword(e.target.value)}/>
                </div>
            </div>
            {/*<div className="splidetrack">
                { events && events.map(event => 
                <EventCard key={event.id} size='small' event={event} /> 
                )}
                </div>*/}
            <EventsTimeline searchKeyword={searchKeyword}/>
        </div>
        <Footer />
        </>

    )
}

export default Events