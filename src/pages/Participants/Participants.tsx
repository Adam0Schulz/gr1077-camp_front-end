
import {useEventById} from "../../features/Event/hooks/UseAllEvents";
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Participants.css";
import ArrowButton from "../../components/ArrowButton/ArrowButton";



const Participants = () => {

const id = Number(useParams().id);

    const { data: event,
        isLoading,
        isError } = useEventById(id);

    if (isLoading) return <>Loading...</>

    if (isError) return <>Oopsie! Something went wrong!</>

    console.log(event);



    return (
        <>
        <div className="page-cont">
            <Navbar activePage='events' />
            <div className='flex-box'>
                <div className='buttons'>
                    <ArrowButton text={'Back to event'} link={'events/' + event?.id} color={'red'} direction={'left'} />
                    <ArrowButton text={'All events'} link={'events'} color={'grey'} direction={'left'} />
                </div>
                <div>
                    <h4 className='heading'>Participants:</h4>
                    <div className='participants-number'>
                        <p>Number of participants:</p>
                        <h4>{event?.participantSet.length}</h4>
                    </div>

                    <div className='table-div'>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email address</th>
                            <th>Company/Title</th>
                            <th>Affiliation</th>
                        </tr>

                        {event?.participantSet.map((participant) => {
                            return (
                                <tr>
                                    <td>#{participant.id}</td>
                                    <td>{participant.firstName}</td>
                                    <td>{participant.lastName}</td>
                                    <td>{participant.email}</td>
                                    <td>{participant.title}</td>
                                    <td>{participant.affiliation}</td>
                                </tr>
                            );
                        })}
                    </table>
                    </div>
                </div>

            </div>
        </div>
            <Footer/>
            </>
    )
}

export default Participants;