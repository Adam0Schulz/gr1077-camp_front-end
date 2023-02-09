import { useQuery } from "react-query"
import { get } from 'api/calls/Researchers'
import { Researcher } from "api/models"


export const useGetAllResearchers = () => {
    return useQuery<Researcher[],Error>(
        "researchers",// query key
        get,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}