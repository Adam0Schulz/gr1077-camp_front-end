import axios from '../../lib/axios.config'
import { Researcher} from "../models";
//get reserchers by id
export const getResearcherById = async (id: number): Promise<Researcher> => {
    return axios.get("/researchers/" + id).then(res => res.data).catch(err => console.log("Origin: API calls", err))

}