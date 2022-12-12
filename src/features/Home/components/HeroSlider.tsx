import React from 'react';
import './HeroSlider.css'


import heroText from "../../../data/heroText.json";
import {ScrollDownArrow} from "../../../components/ScrollDownArrow/ScrollDownArrow";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function HeroSlider() {
    return (
        <div style={{position: "relative"}}>
            <ScrollDownArrow color={"white"}/>
            <Splide className={"hero-slider"}
                options={{
                    rewind: true,
                    arrowPath: "m39.01139,21.97856c0.94656,-1.05077 0.94656,-2.75445 0,-3.80522l-15.42753,-17.12277c-0.94673,-1.05073 -2.48156,-1.05073 -3.42829,0c-0.94673,1.05075 -0.94673,2.75434 0,3.80508l13.71331,15.2203l-13.71331,15.22034c-0.94673,1.05077 -0.94673,2.75427 0,3.80504c0.94673,1.05077 2.48156,1.05077 3.42829,0l15.42753,-17.12277zm-38.8851,0.78799l37.17088,0l0,-5.38119l-37.17088,0l0,5.38119z"
                }}
            >
                <SplideSlide>
                    <div className="img-gradient">
                        <div className="sliderTextContainer">
                            <h2 className="sliderTextContainerHeader">{heroText[0].header}</h2>
                            <h6 className="sliderTextContainerBody">{heroText[0].body}</h6>
                        </div>
                        <img src={heroText[0].image} alt="photo1" className="mySplideImage"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="img-gradient">
                        <div className="sliderTextContainer">
                            <h2 className="sliderTextContainerHeader">{heroText[1].header}</h2>
                            <h6 className="sliderTextContainerBody">{heroText[1].body}</h6>
                        </div>
                        <img src={heroText[1].image} alt="photo2" className="mySplideImage"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="img-gradient">
                        <div className="sliderTextContainer">
                            <h2 className="sliderTextContainerHeader">{heroText[2].header}</h2>
                            <h6 className="sliderTextContainerBody">{heroText[2].body}</h6>
                        </div>
                        <img src={heroText[2].image} alt="photo3" className="mySplideImage"/>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default HeroSlider;
