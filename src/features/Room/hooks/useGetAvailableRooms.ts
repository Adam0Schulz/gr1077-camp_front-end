import { useQuery } from "react-query"
import { getAvailableByParams } from "api/calls/Rooms"
import { Room } from "api/models"


export const useGetAvailableRooms = (params: {name: string, value: string}[]) => {
    return useQuery<Room[],Error>(
        ["rooms", params],// query key
        () => getAvailableByParams(...params),
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}