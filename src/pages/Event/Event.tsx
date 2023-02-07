import { EventSideBar } from "../../features/Event/components/EventSideBar/EventSideBar";
import "./Event.css"
import PostHeader from "../../features/Event/components/PostHeader/PostHeader";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEventById } from "../../features/Event/hooks/UseAllEvents";
import Navbar from "components/Navbar";
import { isError } from "react-query";
import {Button} from "react-bootstrap";
import SignUpBtn from "../../features/Event/components/SignUpBtn/SignUpBtn";
import Sections from "../../components/Section/Sections";
import EventSlider from "../../features/Event/components/EventSlider/EventSlider";
import {ScrollDownArrow} from "../../components/ScrollDownArrow/ScrollDownArrow";


const Event = () => {
    const eventId = Number(useParams().id);
    const { data: event, isLoading, isError, error, isFetching } = useEventById(eventId as number);

    if (isLoading) <>Loading...</>
    if (isError) <>Oops! Something went wrong!</>


    // @ts-ignore
    return (
        <>

            <div className="page-cont">
                <Navbar activePage='events' />
                {event &&
                    <>
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
                            {/*//creat button for register*/}
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
