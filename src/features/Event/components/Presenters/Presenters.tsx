import React, {FormEvent, useState} from 'react';
import "./Presenters.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEventById} from "features/Event/hooks/UseAllEvents";
import {useParams} from "react-router-dom";

//get all reserchers and reserachers by id
 const Presenters = () => {
        const  eventId =Number (useParams().id);
        const [id, setId] =useState<number|"">(eventId);
     //staleTime: Infinity - to prevent fetching
        const{data:event, isLoading, error,isFetching} = useEventById(id as number);

     return (
        <div className="form-row">
            <div className="col-md-8 mb-3">
                {isLoading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {isFetching && <div>Updating...</div>}

                {event && (
                    <section className="line ">
                    <div>
                        <div key={event.id}>
                            <h6 className="text-center when">WHEN</h6>
                            <p className="text-center date">{event.date.toString()}, {event.startTime.toString().slice(0,5)}-{event.endTime.toString().slice(0,5)}</p>
                            <h6 className="text-center wear">WHERE</h6>
                            <p className="text-center location">{event.room.name}</p>
                            <div className="text-center">
                            <h6 className="text-center who">WHO</h6>
                                {/*//show only if researcher or external-researcher exists and show each one by one*/}
                                <section className="text-start" >{event.researcherSet.length > 0 && (
                                    <div>

                                        {event.researcherSet.map((researcher) => (
                                            <div className="Researchers" key={researcher.id}>
                                                <table className= "tableResercher">
                                                    <thead>
                                                    <tr>
                                                <th >
                                                    <img className=" imgResearch img-fluid-right rounded-circle " src={researcher.profileImage.url} alt=""/>
                                                </th>
                                                </tr>
                                                </thead>
                                                </table>
                                                {/*//make color of each first name different*/}
                                                <span className="resercherName"> {researcher.firstName} {researcher.lastName}</span>
                                                {/*//next line*/}
                                                <br/>
                                                {/*// @ts-ignore*/}
                                                <span className="researchersTitle"> {researcher.title}</span>
                                            <br/>
                                                <span className="researchersTell"> {researcher.telephone}</span>
                                            <br/>
                                                <span className="researchersEmail">{researcher.email}</span>
                                            </div>
                                        ))}
                                    </div>
                                )
                                }
                                </section>

                                <section className="text-start" >{event.externalResearcherSet.length > 0 && (
                                    <div>
                                        {event.externalResearcherSet.map((externalresearcher) => (
                                            <div className="Researchers" key={externalresearcher.id}>
                                                <table className= "tableResercher">
                                                    <thead>
                                                    <tr>
                                                        <th >
                                                            <img className=" imgResearch img-fluid-right rounded-circle " src={externalresearcher.profileImage.url} alt=""/>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                </table>
                                                {/*//make color of each first name different*/}
                                                <span className="externalresercherName"> {externalresearcher.firstName} {externalresearcher.lastName}</span>
                                                {/*//next line*/}
                                                <br/>
                                                {/*// @ts-ignore*/}
                                                <span className="externalTitle"> {externalresearcher.title}</span>
                                                <br/>
                                                <span className="externalEmail">{externalresearcher.email}</span>
                                            </div>
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