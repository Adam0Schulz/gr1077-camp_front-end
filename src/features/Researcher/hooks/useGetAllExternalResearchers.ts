import { useQuery } from "react-query"
import { get } from 'api/calls/ExternalResearchers'
import { ExternalResearcher } from "api/models"


export const useGetAllExternalResearchers = () => {
    return useQuery<ExternalResearcher[],Error>(
        "externalResearchers",// query key
        get,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}