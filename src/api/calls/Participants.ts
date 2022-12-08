import axios from 'lib/axios.config'
import {NewParticipant, Participant} from 'api/models'

export const getParticipant = async (id: number): Promise<Participant> => {
    return axios.get("/participants/" + id).then(res => res.data).catch(err => console.log("Origin: API calls", err))
}

export const updateParticipant = async (id: number, newParticipant: Participant): Promise<Participant> => {
    return axios.put("/participants/" + id, newParticipant).then(res => res.data).catch(err => console.log("Origin: API calls", err))
}

export const deleteParticipant = async (id: number): Promise<Participant> => {
    return axios.delete("/participants/" + id).then(res => res.data).catch(err => console.log("Origin: API calls", err))
}

export const createParticipant = async (newParticipant: NewParticipant, eventId: number): Promise<Participant> => {
    return axios.post(`/participants?eventId=${eventId}`, newParticipant).then(res => res.data).catch(err => console.log("Origin: API calls", err))
}