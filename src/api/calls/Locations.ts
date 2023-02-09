import axios from "../../lib/axios.config";
import {Location} from 'api/models'

export const getLocationByRoomId = async (id: number): Promise<Location> => {
    return axios.get("/locations/?roomId=" + id).then(res => res.data).catch(err => console.log("Origin: API calls", err))
}