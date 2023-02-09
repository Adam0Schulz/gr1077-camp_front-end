import { Event, NewEvent } from 'api/models'
import axios from 'lib/axios.config'

const get = async (): Promise<Event[]> => {
    return axios.get("/events").then(res => res.data).catch(err => { throw err })
}

const getById = async (id: number): Promise<Event> => {
    return axios.get("/events/" + id).then(res => res.data).catch(err => { throw err })
}

const update = async (id: number, newEvent: Event): Promise<Event> => {
    return axios.put("/events/" + id, newEvent).then(res => res.data).catch(err => { throw err })
}

const del = async (id: number): Promise<Event> => {
    return axios.delete("/events/" + id).then(res => res.data).catch(err => { throw err })
}

const create = async (newEvent: NewEvent): Promise<Event> => {
    return axios.post("/events", newEvent).then(res => res.data).catch(err => { throw err })
}

const getByParams = async (...param: { name: string, value: string }[]): Promise<Event[]> => {
    const params = param.map(item => item.name + '=' + item.value)
    return axios.get("/events?" + params.join('&')).then(res => res.data).catch(err => { throw err })
}
//get by keyword
const getByKeyword = async (keyword: string): Promise<Event[]> => {
    return axios.get("/events?keyword=" + keyword).then(res => res.data).catch(err => { throw err })
}

//get by keywoord and state
const getByKeywordAndState = async (keyword: string, state: string): Promise<Event[]> => {
    return axios.get("/events?keyword=" + keyword + "&state=" + state).then(res => res.data).catch(err => { throw err })
}

export {
    get,
    getById,
    update,
    del,
    create,
    getByParams,
    getByKeyword,
    getByKeywordAndState
}
