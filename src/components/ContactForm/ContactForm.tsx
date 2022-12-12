import React from "react";
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";
const ContactForm  = () => {
    return(
        <>
            <form  >
                <div className="form-group-contact">
                    {/*//first name and last name in same line*/}
                    <div className="row-Contact">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">First Name</label>
                            <input type="text" name="firstname" className="form-control" placeholder="First name" required/>
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Last Name</label>
                            <input type="text" name="lastname" className="form-control" placeholder="Last name" required/>
                        </div>
                    </div>

                    <label htmlFor="exampleFormControlInput1">E-mail</label>
                    <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" required/>
                    <label htmlFor="exampleFormControlInput1">Subject</label>
                    <input type="subject" name="subject" className="form-control" id="exampleFormControlInput1" placeholder="Subject" required/>
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows={4} placeholder="Message" required/>

                    <Button className="submit" onClick={() => toast.success("Message sent successfully")}>Send</Button>



                </div>
            </form>


    </>
    )
}
export default ContactForm;