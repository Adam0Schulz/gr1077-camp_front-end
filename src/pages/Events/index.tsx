// this import is here just so it doesn't show an error (bc there has to be an import or export present in any ts file)
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { EventsTimeline } from "features/Event";
import { useState } from "react";
import './style.css'
import AdminButton from "../../components/AdminButton/AdminButton";
import AdminBar from "../../components/AdminBar/AdminBar";

const Events = () => {

    return (
        <>
        <div className="page-cont">
            <Navbar activePage='events' />

            {/*localStorage.getItem('isAdmin') ? <>yes Admin bar</> : <>no Admin bar</>*/}
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
            {localStorage.getItem('isAdmin') ?  <AdminBar>
                <AdminButton text={'New event'} link={'/'} color={'red'}/>
            </AdminBar> : <div/>}

            <EventsTimeline />
        </div>
        <Footer />
        </>





        
    )
}

export default Events