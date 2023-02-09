

import {toast} from "react-toastify";
import { Button } from "react-bootstrap";
import React from 'react';

import emailjs from 'emailjs-com';


const ContactForm  = () => {
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;



            function sendEmail (e:any) {

                e.preventDefault();


                // @ts-ignore
                emailjs.sendForm("service_6gtdfs7", "template_3tovgkf", e.target, "7jlGxPbwf6X-C2UbT" )

                    .then((result) => {
                        console.log(result.text);
                        toast.success("Your message has been sent successfully");
                        //send email to the user

                    }, (error) => {
                        console.log(error.text);
                        toast.error("Your message has not been sent");

                    }
                    );
                e.target.reset();
            }




    return(
        <>
            <form onSubmit={sendEmail}>
                <div className="form-group-contact">
                    {/*//first name and last name in same line*/}
                    <div className="row-Contact">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">First Name</label>
                            <input type="text" name="firstname" className="form-control contact__form-control" placeholder="First name" required/>
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Last Name</label>
                            <input type="text" name="lastname" className="form-control contact__form-control" placeholder="Last name" required/>
                        </div>
                    </div>
                    <label htmlFor="exampleFormControlInput1">E-mail</label>
                    <input type="email" name="email" className="form-control contact__form-control" id="exampleFormControlInput1" placeholder="Email" required/>
                    <label htmlFor="exampleFormControlInput1">Subject</label>
                    <input type="subject" name="subject" className="form-control contact__form-control" id="exampleFormControlInput1" placeholder="Subject" required/>
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control contact__form-control" name="message" id="exampleFormControlTextarea1" rows={4} placeholder="Message" required/>
                    <Button className="submit" type="submit" value="Send" >Send</Button>

                </div>
            </form>


        </>
    )
}
export default ContactForm;