
import axios from 'lib/axios.config'
import {Researcher} from 'api/models'

const get = async (): Promise<Researcher[]> => {
    return axios.get("/researchers").then(res => res.data).catch(err => { throw err })
}

const getById = async (id: number): Promise<Researcher> => {
    return axios.get("/researchers/" + id).then(res => res.data).catch(err => { throw err })
}

const update = async (id: number, newResearcher: Researcher): Promise<Researcher> => {
    return axios.put("/researchers/" + id, newResearcher).then(res => res.data).catch(err => { throw err })
}

const del = async (id: number): Promise<Researcher> => {
    return axios.delete("/researchers/" + id).then(res => res.data).catch(err => { throw err })
}

/* const create = async (newResearcher: NewResearcher): Promise<Researcher> => {
    return axios.post("/researchers", newResearcher).then(res => res.data).catch(err => { throw err })
} */

const getByParams = async (...param: { name: string, value: string }[]): Promise<Researcher[]> => {
    const params = param.map(item => item.name + '=' + item.value + '&')
    return axios.get("/researchers?" + params).then(res => res.data).catch(err => { throw err })
}

export {
    get,
    getById,
    update,
    del,
    // create,
    getByParams
}

