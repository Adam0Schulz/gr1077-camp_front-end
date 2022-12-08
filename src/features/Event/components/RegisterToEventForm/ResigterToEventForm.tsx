import {useState} from "react";
import {Form, Button, FormCheck} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {NewParticipant} from "api/models";
import "./RegisterToEventForm.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {useRegister} from "features/Event/hooks/useParticipants";

export const RegisterToEventForm = () => {
    const emptyParticipant: NewParticipant = {
        firstName: "",
        lastName: "",
        email: "",
        affiliation: "",
        title: ""
    }
    const eventId = Number(useParams().id)
    const [participant, setParticipant] = useState<NewParticipant>(emptyParticipant)
    const [agreement, setAgreement] = useState<boolean>(false)
    const {mutate: addMutation} = useRegister(eventId)
    const handleSubmit = () => {
        if (agreement) {
            addMutation(participant)
            setParticipant(emptyParticipant)
            setAgreement(false)
        }
        else {alert("Please accept the terms and conditions to proceed!")}
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
                                <FormCheck>
                                    <FormCheckInput type={"checkbox"}
                                                    className={"mb-3"}
                                                    checked={agreement}
                                                    onChange={(e)=> setAgreement(!agreement)}/>
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