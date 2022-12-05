

import "./HeroEvent.css";
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {useParams} from "react-router-dom";
import {FormEvent, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




    const HeroEvent = () => {
        //READ event name
        const  eventId =Number (useParams().id);
        const [id, setId] =useState<number|"">(eventId);
        const{data:event, isLoading, error} = useEventById(id as number);
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            setId(id);
        }







        return (
            <div>
                <div className="rowEventHero">
                    <div className="leftEventHero" >
                        <h2>Column 1</h2>
                        <p>Data..</p>
                    </div>
                    <div className="rightEventHero">
                        <div className="EventHero" >Event:</div>
                        <form onSubmit={handleSubmit}>
                            <input className="form-control" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                        </form>
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                        {event && (
                            <div>

                        <div className="EventHeroName" >{event?.name}</div>
                                {/*//read image from event*/}
<img className="img-fluid" src={event?.image.url} alt=""/>
                                {/*//get the parageraph section */}






                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    export default HeroEvent;