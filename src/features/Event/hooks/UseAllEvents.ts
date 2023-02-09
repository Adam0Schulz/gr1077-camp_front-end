import {
    get,
    getById,
    update,
    del,
    create,
    getByParams,
    getByKeyword, getByKeywordAndState
}
    from "../../../api/calls/Events";
import {useQuery, useMutation, useQueryClient} from "react-query";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NewEvent , Event, ApiParameter} from "api/models";

import { EventState } from "api/enums";


export const useAllEvents = () => {
    return useQuery<Event[],Error>(
        "events",// query key
        get,
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            refetchOnWindowFocus: false,
        }

    )
}

//get ByKeywordAndState
export const useEventsByKeywordAndState = (keyword: string, state: string) => {
    return useQuery<Event[],Error>(
        ["events", keyword, state],// query key
        () => getByKeywordAndState(keyword, state),
        {
            //refetchOnWindowFocus: false means that the data will not be refetched when the window is focused
            enabled: !!keyword && !!state,
        }
    )
}

export const useEventsByParams = (params: ApiParameter[]) => {
    return useQuery<Event[], Error>(
        ["events", params],
        () => getByParams(...params),
    )
}





export const useEventById = (id: number) => {
    return useQuery<Event,Error>(
        ["eventById", id],// query key
        () => getById(id),
        // fetching function
    )
}

export const useEventsByState = (state: EventState) => {
    return useQuery<Event[],Error>(
        ["eventByParams", state],// query key
        () => getByParams({name: 'state', value: state}),
        // fetching function
    )
}

//delete by id and update cache after delete is successful
export const useDeleteEventById = (id:number) => {
    const queryClientDelete = useQueryClient();
    return useMutation<Event,Error, number>(
        del,
        {
            //refresh all activities after delete
            onSuccess: () => {
                queryClientDelete.invalidateQueries("eventsDelete").catch(err => { throw err})
                toast.success("Event deleted successfully")
            },
            onError: () => {
                toast.error("Event delete failed")
            }
        }
    )
}

//create Event and update cache after create is successful
export const useCreateEvent = () => {
    const queryClientCreate = useQueryClient();
    return useMutation<NewEvent,Error, NewEvent>(
        create,
        {
            //refresh all activities after delete
            onSuccess: () => {
                queryClientCreate.invalidateQueries("eventsCreate").catch(err => { throw err})
                toast.success("Event created successfully")
            },
            onError: () => {
                toast.error("Event create failed")
            }
        }
    )
}





//update by id and update cache after update is successful
export const useUpdateEventById = (id:number) => {
    const queryClientUpdate = useQueryClient();
    return useMutation<Event, Error, Event>(
        (event: Event) => update(id, event),
        {
            //refresh all events after update

            onMutate: (newEvent: Event) => {
                queryClientUpdate.cancelQueries("eventBYId").then(r => console.log(r))
                const previousEvent = queryClientUpdate.getQueryData<Event[]>("eventBYId")

                if (previousEvent) {
                    queryClientUpdate.setQueryData<Event[]>("eventBYId", (old) => {
                        if (old) {
                            return old.map((eventItem) => {
                                if (eventItem.id === id) {
                                    return {...eventItem, ...newEvent}
                                }
                                return eventItem
                            })
                        }
                        return []
                    })
                }
                return {previousEvent}


            },
            onError: (err, newEvent, context) => {
                // @ts-ignore
                if (context?.previousEvent) {
                    // @ts-ignore
                    queryClientUpdate.setQueryData<Event[]>("eventBYId", context.previousEvent)
                }

            },
            onSettled: () => {
                queryClientUpdate.invalidateQueries("events").then(r => console.log(r))
                queryClientUpdate.invalidateQueries(["eventBYId", id]).catch(err => {
                    throw err
                })
            },
            onSuccess: () => {
                toast.success("Event updated successfully")
            }

        }
    )
}
