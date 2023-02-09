import {useQuery} from "react-query";
import {Location} from 'api/models'
import {getLocationByRoomId} from "api/calls/Locations";


export const useLocationByRoomId = (id: number) => {

    return useQuery<Location,Error>(
        ["locations", id],()=> getLocationByRoomId(id)
    )
}