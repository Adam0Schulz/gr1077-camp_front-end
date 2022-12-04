import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    //make afooter component
    return (
            <section className="row d-flex justify-content-start"  >

                <div className=" col-lg-4 col-md-4 " >

                            <p className="textJoin">Join Our newsletter to stay up to date with our blog</p>

                            <div className="input-group form-outline form-white mb-3 ">
                                <input type="email" id="form5Example21" className="form-control mb-6 m-2"/>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-6 m-2 ">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="col-auto">
                            <ul className="list-unstyled mb-0">
                                <p className="paragraph2">
                                    By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                                </p>
                                
                            </ul>

                        </div>

                </div>

                        <div className="col-lg-2 col-md-6 ">
                            <h6 className="textHeading mb-0">Camp Research Group</h6>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/about" className="text-light">About</a>
                                </li>
                                <li>
                                    <a href="/researchers" className="text-light">Researchers</a>
                                </li>
                                <li>
                                    <a href="/events" className="text-light">Events</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-light">Contact</a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-light">Blog</a>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6">
                            <h6 className="textHeading">For Employees</h6>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a  href="" className="text-light ">CAMPnet</a>
                                    <a href="" className=" link-secondary m-4">
                                        <i className="fab fa-login"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"login.svg"} alt="login" className="login">
                                        </img>
                                    </a>
                                </li>

                            </ul>
                        </div>


                <div className="col-lg-2 col-md-6">
                            <h6 className="textHeading mb-0">Follow Us</h6>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="bi bi-facebook"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"facebook.svg"} alt="facebook" className="facebook">
                                        </img>
                                    </a>
                                    <a href="components/Footer/Footer.tsx" className="text-light ">Facebook</a>
                                </li>
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-instagram"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"instagram.svg"} alt="facebook" className="facebook">
                                        </img>
                                    </a>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Instagram</a>
                                </li>
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-twitter"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"twitter.svg"} alt="facebook" className="facebook">
                                        </img>
                                    </a>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Twitter</a>
                                </li>
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-linkedin"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"linkedin.svg"} alt="facebook" className="facebook">
                                        </img>
                                    </a>
                                    <a href="components/Footer/Footer.tsx" className="text-light">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h6 className="textHeading mb-0">Contact</h6>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-linkedin"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"location.svg"} alt="location" className="location">
                                        </img>
                                    </a>
                                    <a href="" className="text-light">Øster Farimagsgade 5 1353 København K Denmark</a>
                                </li>
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-call"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"call.svg"} alt="call" className="call">
                                        </img>
                                    </a>
                                    <a href="" className="text-light">+45 74 85 34 99</a>
                                </li>
                                <li>
                                    <a href="" className="me-4 link-secondary">
                                        <i className="fab fa-email"></i>
                                        <img
                                            src= {window.location.origin+/Photos/+"email.svg"} alt="email" className="email">
                                        </img>
                                    </a>
                                    <a href="" className="text-light">email@ku.dk</a>
                                </li>


                            </ul>


                        </div>

                <section className="mb-4">
                <div className="watermark">
                    <img src= {window.location.origin+/Photos/+"watermark.svg"} alt="footer" className="footer"/>

                    {/*<a href="" className="text-light d-inline-block text-center m-4 mb-6 "><p className="privacy" >Privacy Policy</p></a>
                    <a href="" className="text-light d-inline-block text-center m-4 mb-6"><p className="privacy">Terms of service</p></a>
                    <a href="" className="text-light d-inline-block text-center m-4 mb-6"><p className="privacy">Cookies settings</p></a>*/}

                </div>
                    </section>
            </section>





















    )
}



export default Footer;
