

import "./HeroEvent.css";
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {useParams} from "react-router-dom";
import {FormEvent, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowButton from "components/ArrowButton/ArrowButton"


    const HeroEvent = () => {
        //READ event name
        const  eventId =Number (useParams().id);
        const [id, setId] =useState<number|"">(eventId);
        const{data:event, isLoading, error,isFetching} = useEventById(id as number);

        return (
            <div>
                <div className="rowEventHero">
                    <div className="leftEventHero" >
                        <ArrowButton link={'events'} text={'Back to events'} />
                    </div>
                    <div className="rightEventHero">


                        <div className="EventHero" >Event:</div>
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                        {isFetching && <div>Updating...</div>}
                        {event && (
                            <div>

                        <div className="EventHeroName" >{event?.name}</div>
                                {/*//show image*/}



                            </div>
                        )}
                    </div>
                </div>

            </div>
        );
    }
    export default HeroEvent;