import {useState} from "react";
import {Button} from "react-bootstrap";
import "./SignUpBtn.css";



const SignUpBtn = () => {

    return (
        <div>
            <a href={"http://localhost:3000/register-to-event"}>
            <Button  className="registerButton" variant="primary" size="lg" >
                sign up
            </Button>

            </a>

        </div>
    )
}
export default SignUpBtn;
