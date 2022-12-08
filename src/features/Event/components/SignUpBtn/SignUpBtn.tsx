import {useState} from "react";
import {Button} from "react-bootstrap";
import "./SignUpBtn.css";
import {Link} from "react-router-dom";


interface Props {
    eventId: number
}
const SignUpBtn = ({eventId}: Props) => {

    return (
        <div>
                <Link to={'/events/' + eventId + '/register-to-event'}>
                    <Button  className="registerButton" variant="primary" size="lg" >
                        sign up
                    </Button>
                </Link>
        </div>
    )
}
export default SignUpBtn;
