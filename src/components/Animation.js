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
        <div className="animation-wrapper" id="animation">
            <div className="container">
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

                <div className="animation-section">
                    <div className="content">
                        <div className="gsap-content">
                            <Roll left>
                                <h2>
                                    {data.animationParaOne}
                                </h2>
                            </Roll>
                        </div>
                    </div>
                    <Zoom right>
                        <div className="image-wrapper image-gradient">
                            <img src={data.gsapImage} alt="animation"></img>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Animation;