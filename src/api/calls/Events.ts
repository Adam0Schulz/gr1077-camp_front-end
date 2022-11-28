import { Event } from 'api/models'
import axios from 'lib/axios.config'

export const get = async (): Promise<Event[]> => {
    return axios.get("/events").then(res => res.data).catch(err => { throw err})
}

export const getById = async (id: number): Promise<Event> => {
    return axios.get("/events/" + id).then(res => res.data).catch(err => { throw err})
}

export const update = async (id: number, newEvent: Event): Promise<Event> => {
    return axios.put("/events/" + id, newEvent).then(res => res.data).catch(err => { throw err})
}

export const del = async (id: number): Promise<Event> => {
    return axios.delete("/events/" + id).then(res => res.data).catch(err => { throw err})
}

export const create = async (newEvent: Event): Promise<Event> => {
    return axios.post("/events", newEvent).then(res => res.data).catch(err => { throw err})
}
