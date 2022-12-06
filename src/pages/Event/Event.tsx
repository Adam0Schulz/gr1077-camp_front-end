import {Presenters} from "../../features/Event/components/Presenters/Presenters";
import "./Event.css"
import HeroEvent from "../../features/Event/components/HeroEvent/HeroEvent";
import Footer from "../../components/Footer";
import {useParams} from "react-router-dom";
import {useEventById} from "../../features/Event/hooks/UseAllEvents";
import React from "react";


const Event = () => {
    const  eventId =Number (useParams().id);
    const {data:event, isLoading, error,isFetching} = useEventById(eventId as number);



    return (
        <>
            <div className="page-cont">
                <div className="event-grid">
                <div className="left-grid" >
                    <HeroEvent/>
                    <div className= "event-img">
                        {/*//get image of event from database*/}
                        <img className="imgEventHero" src={event?.image.url} alt="" />
                    </div>
                </div>
                <div className="right-grid">
                    {/*//creat button for register*/}
                    <p className="signUpEvent">INTERESTED? SIGN UP!</p>
                    <Presenters/>
                </div>
            </div>
            </div>

            <Footer/>
        </>


    )
}
export default Event;
