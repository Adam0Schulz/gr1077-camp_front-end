import {useQuery} from "react-query";
import {Researcher} from "../../../api/models";
import {getResearchers} from "../../../api/calls/Researchers";


export const useResearchers = () => {
    return useQuery<Researcher[],Error>(
        "researchers",// query key
        getResearchers,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }
    )
}