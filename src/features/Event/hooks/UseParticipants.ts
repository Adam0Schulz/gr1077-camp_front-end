import { useMutation, useQueryClient} from "react-query";
import { createParticipant} from "api/calls/Participants";
import {NewParticipant, Participant} from "api/models";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const useRegister = (eventId: number) => {
    const queryClient = useQueryClient();
    return useMutation(
        (data: NewParticipant) => createParticipant(data, eventId),
        {

            onError: (_error) => {
                // Error message
                toast.error("Error during registration process")
            },

            onSuccess: (_data) => {
                // Success message
                toast.success("Successful  registration: " + _data.firstName + " " + _data.lastName + " !")
            }
        }
    )

}
