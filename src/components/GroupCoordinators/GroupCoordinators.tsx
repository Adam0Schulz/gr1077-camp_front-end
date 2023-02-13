import React from "react";
import {Button} from "react-bootstrap";
import {UseResearcherById} from "../../features/Event/hooks/UseAllReserchers";
const GroupCoordinators  = () => {

    const { data: researcher, isLoading, isError, error, isFetching } = UseResearcherById(7);
    const{data:researcher2} = UseResearcherById(2);
    return(
        <>
            <div className="grid-item-grid-container-3-2 pt-4">
                <img src={researcher?.profileImage.url} alt="researcher" className="rounded-circle mt-4" width={70} height={70}/>

                <div className="row-contact-3">

                    <div className="col">
                        <table className="p-1 table table-borderless ">

                            <thead>
                            <tr>

                                <th className="group2-name" > {researcher?.firstName}{researcher?.lastName}</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td><td className="group3-title "> {researcher?.title}</td></td>
                            </tr>
                            <tr>
                                <td><td className="group3-email"> {researcher?.email}</td></td>
                            </tr>
                            <tr>
                                <td><td className="group3-phone"> {researcher?.telephone}</td></td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div className="grid-item-grid-container-3-2">
                {/*//cycle image bootstrap*/}



                <img src={researcher2?.profileImage.url} alt="researcher" className="rounded-circle mt-4" width={70} height={70} />

                <div className="row-contact-3">

                    <div className="col">
                        <table className="table table-borderless">

                            <thead>
                            <tr>
                                <th className="group2-name"> {researcher2?.firstName} {researcher2?.lastName}</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr>

                                <td><td className="group3-title "> {researcher2?.title}</td></td>
                            </tr>
                            <tr>
                                <td><td className="group3-email"> {researcher2?.email}</td></td>
                            </tr>
                            <tr>
                                <td><td className="group3-phone"> {researcher2?.telephone}</td></td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}
export default GroupCoordinators;