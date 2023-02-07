import './About.css'
import about from 'data/aboutPageText.json'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {MoreArrow} from "../../components/MoreArrow/MoreArrow";
import {Splide, SplideSlide} from "@splidejs/react-splide";

export const AboutPage = () => {

    return (
        <>
            <div className={"page-cont"}>
                <Navbar activePage={"about"}/>
                <div style={{color: "var(--color-primary)", marginTop: "3%"}}>
                    <h1>CULTURE, MOBILITY</h1>
                    <h1>AND POWER</h1>
                </div>
                <MoreArrow/>
                <div className={"group-photo-grid"}>
                    <div>
                        <img src={about.i1} alt={"research-group"} style={{width: "100%"}}/>
                    </div>
                    <div style={{width: "80%", textAlign: "justify"}}>{about.p1}</div>
                </div>
            </div>
                <div className={"highlight-section"}>
                    <div className={"style-line-box"} style={{marginLeft: "10vw", marginRight: "2vw"}}>
                        <div className={"style-line"}>

                        </div>
                    </div>
                    <h3 style={{width: "100%", textAlign: "center", marginTop: "25%", marginBottom: "15%"}}>
                        {about.p2}
                    </h3>
                    <div className={"style-line-box"} style={{marginRight: "10vw", marginLeft: "2vw"}}>
                        <div className={"style-line"}>

                        </div>
                    </div>
                </div>

                <h3 style={{textAlign: "center", marginTop: "7%"}}>
                    OUR MAIN CONCERN
                </h3>
                <div className={"carousel"}>
                    <Splide
                        options={ {
                            type: "loop",
                            perPage: 3,
                            height : '10rem',
                            autoplay : true,
                            speed: 1000,
                            gap    : '0.1rem',
                            arrows: false,
                            pagination: false,
                            padding: '1rem, 1rem, 8rem, 8rem',
                        } }
                    >
                        <SplideSlide>
                            <h5>
                               LEADERSHIP AND DOMINATION
                            </h5>
                        </SplideSlide>
                        <SplideSlide>
                            <h5>
                                GENDER AND KINSHIP
                            </h5>
                        </SplideSlide>
                        <SplideSlide>
                            <h5>
                                RELIGION
                            </h5>
                        </SplideSlide>
                        <SplideSlide>
                            <h5>
                                CRIME
                            </h5>
                        </SplideSlide>
                        <SplideSlide>
                            <h5>
                                (IL)LEGALITY
                            </h5>
                        </SplideSlide>
                    </Splide>

                </div>
            <div className={"page-cont"}>
                <h5>Research focus</h5>
                <div>{about.p3}</div>
                <h5>Activities</h5>
                <div>{about.p4}</div>
            </div>
            <Footer/>
        </>
    )

}
