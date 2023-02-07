import { ExternalResearcher } from 'api/models'
import axios from 'lib/axios.config'

const get = async (): Promise<ExternalResearcher[]> => {
    return axios.get("/externalResearchers").then(res => res.data).catch(err => { throw err })
}

const getById = async (id: number): Promise<ExternalResearcher> => {
    return axios.get("/externalResearchers/" + id).then(res => res.data).catch(err => { throw err })
}

const update = async (id: number, newExternalResearcher: ExternalResearcher): Promise<ExternalResearcher> => {
    return axios.put("/externalResearchers/" + id, newExternalResearcher).then(res => res.data).catch(err => { throw err })
}

const del = async (id: number): Promise<ExternalResearcher> => {
    return axios.delete("/externalResearchers/" + id).then(res => res.data).catch(err => { throw err })
}

/* const create = async (newExternalResearcher: NewExternalResearcher): Promise<ExternalResearcher> => {
    return axios.post("/externalResearchers", newExternalResearcher).then(res => res.data).catch(err => { throw err })
} */

const getByParams = async (...param: { name: string, value: string }[]): Promise<ExternalResearcher[]> => {
    const params = param.map(item => item.name + '=' + item.value + '&')
    return axios.get("/externalResearchers?" + params).then(res => res.data).catch(err => { throw err })
}


export {
    get,
    getById,
    update,
    del,
    // create,
    getByParams
}
