import {useQuery} from "react-query";
import {Researcher} from "api/models";
import {get} from "api/calls/Researchers";


export const useResearchers = () => {
    return useQuery<Researcher[],Error>(
        "researchers",// query key
        get,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }
    )
}