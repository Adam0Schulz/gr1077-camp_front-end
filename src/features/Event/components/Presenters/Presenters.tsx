import React, {FormEvent, useState} from 'react';
import "./Presenters.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {text} from "stream/consumers";
import {Select} from "react-query/types/devtools/styledComponents";

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
                                {/*//show only if researcher or external-researcher exists and show each one by one*/}



                                <section className="text-start pb-4 " >{event.researcherSet.length > 0 && (
                                    <div>
                                        {event.researcherSet.map((researcher) => (
                                            <h5 key={researcher.id}>
                                                {/*//make color of each first name different*/}
                                                {researcher.firstName} {researcher.lastName}
                                                {/*//next line*/}
                                                <br/>
                                                {/*// @ts-ignore*/}
                                                <img className=" imgResearch img-fluid-right rounded-circle w-10  " src={researcher.profileImage.url} alt=""/>
                                                <br/>
                                                <span className="researchersTitle"> {researcher.title}</span>
                                            <br/>
                                                <span className="researchersTell"> {researcher.telephone}</span>
                                            <br/>
                                                <span className="researchersEmail">{researcher.email}</span>

                                            </h5>

                                        ))}
                                    </div>
                                )
                                }
                                </section>

                                <section className="text-start pb-4  " >{event.externalResearcherSet.length > 0 && (
                                    <div>
                                        {event.externalResearcherSet.map((externalresearcher) => (
                                            <h5 key={externalresearcher.id}>
                                                {/*//make color of each first name different*/}
                                                {externalresearcher.firstName} {externalresearcher.lastName}
                                                {/*//next line*/}
                                                <br/>
                                                {/*// @ts-ignore*/}
                                                <img className=" imgResearch img-fluid-right rounded-circle w-10  " src={externalresearcher.profileImage.url} alt=""/>
                                                <br/>
                                                <span className="researchersTitle"> {externalresearcher.title}</span>
                                                <br/>
                                                <span className="researchersEmail">{externalresearcher.email}</span>

                                            </h5>

                                        ))}
                                    </div>
                                )
                                }
                                </section>

                            </div>
                        </div>
                    </div>
                </section>
                )}
            </div>
        </div>
    );
};


export {Presenters}