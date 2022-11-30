import React from 'react';
import "Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    //make afooter component
    return (
        <div className="footerCamp">
            <div className="bg-light text-center text-lg-start">

                <div className="container p-4">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <p className="text-uppercase">Join Our newsletter to stay up to date with our blog</p>
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example21" className="form-control"/>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto">
                            </div>

                            <ul className="list-unstyled mb-0">

                                <p className="pt-2">
                                    By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                                </p>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <h5 className="text-uppercase mb-0">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="/about" className="text-light">About</a>
                                </li>
                                <li>
                                    <a href="/researchers" className="text-light">Researchers</a>
                                </li>
                                <li>
                                    <a href="/Users/sfatt/OneDrive/Desktop/java class homework/gr1077-camp_front-end/src/pages/Events" className="text-light">Events</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-light">Contact</a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-light">Blog</a>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <h5 className="text-uppercase">ForEmployees</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">CAMPnet</a>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <h5 className="text-uppercase mb-0">Follow Us</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light ">Facebook</a>
                                </li>
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Instagram</a>
                                </li>
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Twitter</a>
                                </li>
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <h5 className="text-uppercase mb-0">Follow Us</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Øster Farimagsgade 5 1353 København K Denmark</a>
                                </li>
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">+45 74 85 34 99</a>
                                </li>
                                <li>
                                    <a href="components/Footer/Footer.tsx" className="text-light">email@ku.dk</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

            </div>



            </div>




    )
}



export default Footer;
