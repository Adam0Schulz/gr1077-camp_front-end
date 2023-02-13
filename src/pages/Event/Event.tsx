import { EventSideBar } from "../../features/Event/components/EventSideBar/EventSideBar";
import "./Event.css"
import PostHeader from "../../features/Event/components/PostHeader/PostHeader";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useDeleteEventById, useEventById } from "../../features/Event/hooks/UseAllEvents";
import Navbar from "components/Navbar";
import { isError } from "react-query";
import {Button} from "react-bootstrap";
import SignUpBtn from "../../features/Event/components/SignUpBtn/SignUpBtn";
import Sections from "../../components/Section/Sections";
import EventSlider from "../../features/Event/components/EventSlider/EventSlider";
import AdminBar from "../../components/AdminBar/AdminBar";
import AdminButton from "../../components/AdminButton/AdminButton";
import {ScrollDownArrow} from "../../components/ScrollDownArrow/ScrollDownArrow";
import DeletePopup from "components/DeletePopup/DeletePopup";

interface Props {
    del?: boolean
}


const Event = ({del}: Props) => {
    const eventId = Number(useParams().id);
    const { data: event, isLoading, isError, error, isFetching } = useEventById(eventId as number);
    const {mutate: deleteEvent} = useDeleteEventById(eventId)

    if (isLoading) <>Loading...</>
    if (isError) <>Oops! Something went wrong!</>
    
    return (
        <>
            {del ? <DeletePopup type="event" onCancelLink={"/events/" + eventId} onDeleteLink={"/events"} deleteFunc={() => deleteEvent(eventId)}/> : <></>}
            <div className="page-cont">
                <Navbar activePage='events' />
                {event &&
                    <>
                    {localStorage.getItem('isAdmin') ? <AdminBar>
                            {/* <AdminButton text={'Edit event'} link={'/'} color={'grey'}/> */}
                            <AdminButton text={'See participants'} link={'/events/' + event.id + '/participants' } color={'grey'}/>
                            <AdminButton text={'Delete event'} link={'delete'} color={'red'}/>
                        </AdminBar> : <div/>}
                    <div className="event-grid">
                        <div className="left-grid" >

                            <PostHeader page={event} />
                            <div className="event-img">
                                <img className="event-img__img" src={event?.image.url} alt={event?.image.caption} />
                                <label>{event?.image.caption}</label>
                            </div>
                            <div className={"any-page"}>
                                <ScrollDownArrow color={"black"} />
                            </div>
                            <br />
                            <br />

                            <Sections page={event}/>

                        </div>
                        <div className="right-grid">
                            {/*//create button for register*/}
                            <p className="signUpEvent">INTERESTED? SIGNUP!</p>
                            <SignUpBtn eventId={eventId}  />

                            <EventSideBar />

                        </div>
                    </div>
                    <EventSlider />
                    </>
                }
            </div>


            <Footer />
        </>


    )
}
export default Event;
