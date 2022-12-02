import React, {FormEvent, useState} from 'react';
import "./Presenters.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {text} from "stream/consumers";

//get all reserchers and reserachers by id
 const Presenters = () => {
    const [id, setId] =useState<number|"">(6);
    const{data:event, isLoading, error} = useEventById(id as number);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setId(id);
    }
    // @ts-ignore
     // @ts-ignore
     return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                <form onSubmit={handleSubmit}>
                    <input className="form-control" type="number" value={id} onChange={(e) => setId(parseInt(e.target.value))}/>
                </form>
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {event && (
                    <section className="line p-4">
                    <div>
                        <div key={event.id}>
                            <h6 className="text-center when">WHEN</h6>
                            <p className="text-center">{event.date.toString()}, {event.startTime.toString().slice(0,5)}-{event.endTime.toString().slice(0,5)}</p>
                            <h6 className="text-center wear">WEAR</h6>
                            <p className="text-center">{event.room.name}</p>
                            <div className="text-center mb-4">
                            <h6 className="text-center who ">WHO</h6>
                                {/*// @ts-ignore*/}

                                <img className=" imgResearch img-fluid-right rounded-circle w-10 " src={event.researcherSet?.map((researcher) => researcher.profileImage.url)} alt=""/>
                                </div>



                            <section className="">

                            <h6>{event.researcherSet?.map((researcher) => researcher.firstName)}   {event.researcherSet?.map((researcher) => researcher.lastName)}</h6>




                            <h6 className="researchersTitle">{event.researcherSet?.map((researcher) => researcher.title)}</h6>
                            <h6 className="researchersTell">{event.researcherSet?.map((researcher) => researcher.telephone)}</h6>
                            <h6 className="researchersEmail">{event.researcherSet?.map((researcher) => researcher.email)}</h6>
                            <h6>{event.externalResearcherSet?.map((externalResearcher) => externalResearcher.firstName)}{event.externalResearcherSet?.map((externalResearcher) => externalResearcher.lastName)}</h6>
                            <h6 className="externalTitle">{event.externalResearcherSet?.map((externalResearcher) => externalResearcher.title)}</h6>
                            <h6 className="externalEmail">{event.externalResearcherSet?.map((externalResearcher) => externalResearcher.email)}</h6>
                            </section>
                        </div>
                    </div>
                    </section>
                )}
            </div>
        </div>
    )
}
export {Presenters};