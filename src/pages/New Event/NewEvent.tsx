import Footer from "components/Footer"
import Navbar from "components/Navbar"
import { ScrollDownArrow } from "components/ScrollDownArrow/ScrollDownArrow"
import calendarIcon from 'assets/icons/calendar_color.svg'
import './NewEvent.css'
import UpsertForm from "components/UpsertForm/UpsertForm"



const NewEvent = () => {

    // this could redirect to a 404 page
    if (!(localStorage.getItem('isAdmin'))) {
        return <>Oops! Something went wrong!</>
    }

    return (
        <>
            <ScrollDownArrow />
            <div className="page-cont">
                <Navbar activePage="events" />
                <div className="page-heading new-event-header">
                    <div className="img_cont">
                        <img src={calendarIcon} alt="" />
                    </div>
                    <h4>New Event</h4>
                </div>
                <UpsertForm type="event" />

            </div>
            <Footer />
        </>
    )
}

export default NewEvent