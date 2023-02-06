import { useQuery } from "react-query"
import { getById } from 'api/calls/Researchers'
import { Researcher } from "api/models"


export const useGetResearcherById = (id: number) => {
    return useQuery<Researcher,Error>(
        ["researcher", id],// query key
        () => getById(id),
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}