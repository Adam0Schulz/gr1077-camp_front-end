import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Contact.css"
import 'react-toastify/dist/ReactToastify.css'
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import GroupCoordinators from "../../components/GroupCoordinators/GroupCoordinators";


const Contact  = () => {

    return(
        <>
            <div className="page-cont">
                <Navbar activePage='contact' />
                <div className="grid-container">
                    <div className="grid-item1">
                        {/*//make form for contact us bootstrap*/}
                        <h2>CONTACT US</h2>
                        <ContactForm/>
                    </div>
                    <div className="grid-item2">
                        {/*google map of address*/}
                        <iframe
                            className="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8996.262662166024!2d12.5696519!3d55.6878461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20c6a9b79fe82ea0!2sUniversity%20of%20Copenhagen%20Faculty%20of%20Social%20Sciences!5e0!3m2!1sen!2sdk!4v1670697966122!5m2!1sen!2sdk"
                            width={400}
                            height={450}
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy">
                        </iframe>
                    </div>
                    <div className="grid-item3">
                        <div className="grid-item3-1">
                            <h5 className="address">Address</h5>
                            <p className="address2"> Department of Anthropology
                                University of Copenhagen
                                Øster Farimagsgade 5 DK-1353 Copenhagen K</p>
                        </div>
                        <div className="grid-item3-2">
                            <h5 className="group pt-4">Group Coordinators</h5>
                            <GroupCoordinators/>
                        </div>
                    </div >
                </div>
            </div>
            <Footer />
        </>
    )
}
export {Contact}