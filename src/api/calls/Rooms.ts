import { Room } from 'api/models'
import axios from 'lib/axios.config'

const get = async (): Promise<Room[]> => {
    return axios.get("/rooms").then(res => res.data).catch(err => { throw err })
}

const getById = async (id: number): Promise<Room> => {
    return axios.get("/rooms/" + id).then(res => res.data).catch(err => { throw err })
}

const update = async (id: number, newExternalResearcher: Room): Promise<Room> => {
    return axios.put("/rooms/" + id, newExternalResearcher).then(res => res.data).catch(err => { throw err })
}

const del = async (id: number): Promise<Room> => {
    return axios.delete("/rooms/" + id).then(res => res.data).catch(err => { throw err })
}

/* const create = async (newExternalResearcher: NewExternalResearcher): Promise<Room> => {
    return axios.post("/room", newExternalResearcher).then(res => res.data).catch(err => { throw err })
} */

const getByParams = async (...param: { name: string, value: string }[]): Promise<Room[]> => {
    const params = param.map(item => item.name + '=' + item.value + '&')
    return axios.get("/rooms?" + params).then(res => res.data).catch(err => { throw err })
}

const getAvailableByParams = async (...param: { name: string, value: string }[]): Promise<Room[]> => {
    const params = param.map(item => item.name + '=' + item.value + '&')
    console.log(params)
    return axios.get("/rooms/available?" + params).then(res => res.data).catch(err => { throw err })
}

export {
    get,
    getById,
    update,
    del,
    // create,
    getAvailableByParams,
    getByParams
}
