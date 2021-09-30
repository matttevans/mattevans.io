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
                <div className="animation-section">
                    <div className="animation-content">
                        <Slide left>
                            <div className="animation-heading">
                                <h1>
                                    Beautiful animations
                                </h1>
                            </div>
                        </Slide>
                        <Roll left>
                            <h2>
                                {data.animationParaOne}
                            </h2>
                        </Roll>
                    </div>
                    <Zoom right>
                        <div className="image-wrapper image-gradient">
                            <img src={data.gsapImage} alt="animation"></img>
                        </div>
                    </Zoom>
                </div>
                <div className="animation-section">
                    <div className="animation-content">
                        <Slide left>
                            <div className="animation-heading">
                                <h1>
                                    Code
                                </h1>
                            </div>
                        </Slide>
                        <Roll left>
                            <h2>
                                Writing clean, readable, scalable code
                            </h2>
                        </Roll>
                    </div>
                    <Zoom right>
                        <div className="image-wrapper image-gradient">
                            <img src={data.csharpImage} alt="animation"></img>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Animation;