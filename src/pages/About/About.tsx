import './About.css'
import about from 'data/aboutPageText.json'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {MoreArrow} from "../../components/MoreArrow/MoreArrow";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import ParagraphSection from "../../components/Section/ParagraphSection/ParagraphSection";
import Sections from "../../components/Section/Sections";

export const AboutPage = () => {

    return (
        <>
            <div className={"page-cont"}>
                <Navbar activePage={"about"}/>
                <div style={{color: "var(--color-primary)", marginTop: "3%"}}>
                    <h1>CULTURE, MOBILITY</h1>
                    <h1>AND POWER</h1>
                </div>
                <div className={"group-photo-grid"}>
                    <div>
                        <img src={about.i1} alt={"research-group"} style={{width: "100%"}}/>
                    </div>
                    <p>
                        {about.p1}
                    </p>
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
            <div className={"page-cont"}>
                <h3 style={{textAlign: "center", marginTop: "7%", marginBottom: "3%"}}>
                    OUR MAIN CONCERN
                </h3>
                <div className={"carousel"}>
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 3,
                            height: '10rem',
                            autoplay: true,
                            speed: 2000,
                            perMove: 1,
                            interval: 4000,
                            arrows: false,
                            pagination: false,
                            padding: '1rem, 1rem, 8rem, 8rem',
                            easing: 'ease'
                        }}
                    >
                        <SplideSlide>
                            <div className={"splide-item-box"}>
                                <h5 className={"splide-item-text"}>
                                    LEADERSHIP AND DOMINATION
                                </h5>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={"splide-item-box"}>
                                <h5 className={"splide-item-text"}>
                                    GENDER AND KINSHIP
                                </h5>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={"splide-item-box"}>
                                <h5 className={"splide-item-text"}>
                                    RELIGION
                                </h5>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={"splide-item-box"}>
                                <h5 className={"splide-item-text"}>
                                    CRIME
                                </h5>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={"splide-item-box"}>
                                <h5 className={"splide-item-text"}>
                                    (IL)LEGALITY
                                </h5>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <Sections page={
                    {paragraphSectionSet: [{heading: "Research focus", text: about.p3, seq: 1, id:1},
                            {heading: "Activities", text: about.p4, seq: 2, id:2}],
                    imageSectionSet: [],
                    linkSectionSet: []}
                }/>
            </div>
            <Footer/>
        </>
    )

}
