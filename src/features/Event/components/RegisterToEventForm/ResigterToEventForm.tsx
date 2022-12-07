import {useState} from "react";
import {Form, Button, FormCheck} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {NewParticipant, Participant} from "api/models";
import "./RegisterToEventForm.css"
import {createParticipant} from "api/calls/Participants";
import 'bootstrap/dist/css/bootstrap.min.css'
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

export const RegisterToEventForm = () => {
    const emptyParticipant: NewParticipant = {
        firstName: "",
        lastName: "",
        email: "",
        affiliation: "",
        title: ""
    }
    const [participant, setParticipant] = useState<NewParticipant>(emptyParticipant)
    // //const { mutate: addMutation } = useRegister()
    const eventId = Number(useParams().id)
    const handleSubmit = () => {
        createParticipant(participant, eventId).then(result => console.log(result))
        //addMutation(participant)
        setParticipant(emptyParticipant)
    }
    return (
        <div className={"r-wrapper"}>
            <div className={"my-main-content"}>
                <div className={"register-form-border-top"}>
                </div>
                <div className={"registerForm"}>
                    <Form className="row g-3">
                        <div className={"col-md-6"}>
                            <label className={"form-label"}>
                                First Name
                                <input className="form-control mb-3" placeholder="First Name"
                                       required={true}
                                       minLength={2}
                                       maxLength={50}
                                       value={participant.firstName}
                                       onChange={(e) =>
                                           setParticipant({...participant, firstName: e.target.value})}/>
                            </label>
                        </div>
                        <div className={"col-md-6"}>
                            <label className={"form-label"}>
                                Last Name
                                <input className="form-control mb-3" placeholder="Last Name"
                                       required={true}
                                       minLength={2}
                                       maxLength={50}
                                       value={participant.lastName}
                                       onChange={(e) =>
                                           setParticipant({...participant, lastName: e.target.value})}/>
                            </label>
                        </div>
                        <div className={"col-md-6"}>
                            <label className={"form-label"}>
                                Title
                                <input className={"form-control mb-3"} placeholder={"Title"}
                                       required={true}
                                       value={participant.title}
                                       onChange={(e) =>
                                           setParticipant({...participant, title: e.target.value})}/>
                            </label>
                        </div>
                        <div className={"col-md-6"}>
                            <label className={"form-label"}>
                                Email
                                <input className={"form-control mb-3"} placeholder={"Email"}
                                       required={true}
                                       type={"email"}
                                       value={participant.email}
                                       onChange={(e) =>
                                           setParticipant({...participant, email: e.target.value})}/>
                            </label>
                        </div>
                        <div className={"col-md-6"}>
                            <label className={"form-label"}>
                                Affiliation
                                <input className="form-control mb-3" placeholder="Affiliation"
                                       required={true}
                                       maxLength={100}
                                       value={participant.affiliation}
                                       onChange={(e) =>
                                           setParticipant({...participant, affiliation: e.target.value})}/>
                            </label>
                        </div>
                        <div className={"col-md-6"}>
                            <div className={"checkR"}>
                                <FormCheck >
                                    <FormCheckInput type={"checkbox"} className={"mb-3"}/>
                                    <FormCheckLabel>
                                        I have read and agree to the terms and conditions.
                                    </FormCheckLabel>
                                </FormCheck>
                            </div>
                        </div>
                        <div className={"row-cols-md-6"}>
                            <Button className="cancelButtonR" variant="primary"
                                    onClick={() => handleSubmit()}>
                                Cancel
                            </Button>
                            <Button className="registerButtonR" variant="primary"
                                    onClick={() => handleSubmit()}>
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className={"register-form-border-right"}>
                <div>

                </div>
            </div>
        </div>
    )
}