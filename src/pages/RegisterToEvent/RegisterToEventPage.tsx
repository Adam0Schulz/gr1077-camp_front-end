import {RegisterToEventForm} from "../../features/Event/components/RegisterToEventForm/ResigterToEventForm";
import 'App.css'
import './RegisterToEventPage.css'
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PostHeader from "../../features/Event/components/PostHeader/PostHeader";
import {useParams} from "react-router-dom";
import {useEventById} from "../../features/Event/hooks/UseAllEvents";
import {EventDescription} from "../../features/Event/components/EventDescription/EventDescription";
import {EventSideBar} from "../../features/Event/components/EventSideBar/EventSideBar";


export const RegisterToEventPage = () => {
    const eventId = Number(useParams().id);
    const {data: event, isLoading, isError, error, isFetching} = useEventById(eventId as number);

    return (
        <div className={"register-to-event-page"}>
            <div className={"page-cont"}>
                <Navbar activePage={'events'}/>
                <div className={"register-to-event-grid"}>
                    <div>
                        {event && <PostHeader page={event}/>}
                        {event && <EventDescription event={event}/>}
                        <RegisterToEventForm/>
                    </div>
                    <div style={{marginTop: "3.2 em"}}>
                        <EventSideBar/>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}