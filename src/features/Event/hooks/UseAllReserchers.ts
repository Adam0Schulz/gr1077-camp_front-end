import { useQuery} from "react-query";


import {getResearcherById} from "../../../api/calls/Reserchers";
import {Researcher} from "../../../api/models";



//use reserchers byid and toast
export const UseResearcherById = (id: number) => {
    return useQuery<Researcher,Error>(
        ["researcherById", id],// query key
        () => getResearcherById(id),

    )
}