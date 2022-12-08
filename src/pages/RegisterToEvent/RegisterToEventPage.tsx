import {RegisterToEventForm} from "../../features/Event/components/RegisterToEventForm/ResigterToEventForm";
import 'App.css'
import './RegisterToEventPage.css'
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import {ScrollDownArrow} from "../../components/ScrollDownArrow/ScrollDownArrow";
import PostHeader from "../../features/Event/components/PostHeader/PostHeader";
import {useParams} from "react-router-dom";
import {useEventById} from "../../features/Event/hooks/UseAllEvents";
import {EventDescription} from "../../features/Event/components/EventDescription/EventDescription";


export const RegisterToEventPage = () => {
    const eventId = Number(useParams().id);
    const { data: event, isLoading, isError, error, isFetching } = useEventById(eventId as number);

    return (
        <div>
            <div className={"page-cont"}>
                <Navbar activePage={'events'}/>
                {event && <PostHeader page={event}/>}
                {event && <EventDescription event={event}/>}
                <RegisterToEventForm/>
            </div>
            <Footer/>
        </div>
    )
}