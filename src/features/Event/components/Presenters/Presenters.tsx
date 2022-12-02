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
                    <section className="line ">
                    <div>
                        <div key={event.id}>
                            <h6 className="text-center when">WHEN</h6>
                            <p className="text-center">{event.date.toString()}, {event.startTime.toString().slice(0,5)}-{event.endTime.toString().slice(0,5)}</p>
                            <h6 className="text-center wear">WEAR</h6>
                            <p className="text-center">{event.room.name}</p>
                            <div className="text-center who">
                            <h6 className="text-center  ">WHO</h6>
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