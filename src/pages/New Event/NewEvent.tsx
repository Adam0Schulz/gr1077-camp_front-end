import Footer from "components/Footer"
import Navbar from "components/Navbar"
import { ScrollDownArrow } from "components/ScrollDownArrow/ScrollDownArrow"
import calendarIcon from 'assets/icons/calendar_color.svg'
import './NewEvent.css'
import BasicInfo from "components/BasicInfo/BasicInfo"
import Description from "components/Description/Description"
import { newEvent } from "lib/atomStore"
import { useAtom } from "jotai"
import { useCreateEvent } from "features/Event/hooks/UseAllEvents"



const NewEvent = () => {

    const [event, setEvent] = useAtom(newEvent)

    const {mutate} = useCreateEvent()

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
                <BasicInfo />
                <Description />
                <div>
                    <button>Cancel</button>
                    <button onClick={e => mutate(event)}>Save</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewEvent