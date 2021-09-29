import React, {useEffect, useRef} from "react"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

const Animation = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="animation-wrapper">
                    <Slide right>
                        <div className="heading-front">
                            <h1>Beautiful</h1>
                        </div>
                    </Slide>
                    <Slide left>
                        <div className="heading-back">
                            <h1>animations</h1>
                        </div>
                    </Slide>
                    <div className="animation-content content">
                        <div style={{position: "sticky", left: "50%", top: "10vh"}}>
                            <Zoom right>
                                <div className="image-wrapper">
                                    <img src={data.gsapImage}/>
                                </div>
                            </Zoom>
                        </div>
                        <Roll bottom>
                            <div className="parallax-text" style={{maxWidth: "780px"}}>
                                <h2>Creating elegant, smooth "scrollytelling" with GSAP ScrollTrigger and React Reveal</h2>
                            </div>
                        </Roll>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animation;