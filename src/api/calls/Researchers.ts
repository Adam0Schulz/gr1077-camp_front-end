import axios from 'lib/axios.config'
import {Researcher} from 'api/models'

export const getResearchers = async (): Promise<Researcher[]> => {
    return axios.get("/researchers").then(res => res.data).catch(err => console.log("Origin: API calls", err))
}


