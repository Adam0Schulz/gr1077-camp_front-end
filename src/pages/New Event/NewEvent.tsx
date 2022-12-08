import Footer from "components/Footer"
import Navbar from "components/Navbar"
import { ScrollDownArrow } from "components/ScrollDownArrow/ScrollDownArrow"
import calendarIcon from 'assets/icons/calendar.svg'
import './NewEvent.css'
import Separator from "components/Separator/Separator"
import Form from 'react-bootstrap/Form';


const NewEvent = () => {

    // this could redirect to a 404 page
    if(!(localStorage.getItem('isAdmin'))) {
        return <>Oops! Something went wrong!</>
    }

  return (
    <>
        <ScrollDownArrow />
        <div className="page-cont">
            <Navbar activePage="events" />
            <div className="new-event-header">
                <div className="img_cont">
                    <img src={calendarIcon} alt="" />
                </div>
                <h4>New Event</h4>
            </div>
            <div className="basic-info">
                <div className="basic-info__header">
                    <h5 className="basic-info__heading">Basic info</h5>
                    <Separator />
                </div>
                <div className="basic-info__body">
                    <div className="basic-info__header-info">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="basic-info__sidebar">
                        <div className="basic-info__datetime">
                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Start time</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>End Time</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Room</Form.Label>
                            <Form.Select aria-label="Select a room" disabled>
                                <option>Select a room</option>
                                <option value="3">Three</option>
                                <option value="3">Three</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Researcher</Form.Label>
                            <Form.Select aria-label="Select a researcher">
                                <option>Select a researcher</option>
                                <option value="3">Three</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>External researcher</Form.Label>
                            <Form.Select aria-label="Select an external researcher">
                                <option>Select an external researcher</option>
                                <option value="3">Three</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default NewEvent