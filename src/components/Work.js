import React, {useEffect, useRef} from "react"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Work = ({images, anchors, children}) => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        let tl = gsap.timeline();
        images.forEach((image, index) => {
            tl.to(".parallax-content img", {
                attr: {src: image},
                scrollTrigger: {
                    trigger: element.querySelector(anchors[index]),
                    start: "top center",
                    end: "bottom bottom",
                    scrub: true,
                    toggleActions: "reverse"
                }
            })
        })
    }, [images, anchors]);

    return (
        <div className="gradient" id="work">
            <div className="container">
                <div className="parallax-container work-wrapper" id="parallax" ref={ref}>
                    <Fade bottom>
                        <div className="heading-front">
                            <h1>Some of my</h1>
                        </div>
                        <div className="heading-back">
                            <h1>Work</h1>
                        </div>
                    </Fade>
                    <div className="parallax-content content">
                        <div style={{position: "sticky", left: "50%", top: "10vh"}}>
                            <div className="image-wrapper">
                                <img src={data.headstrongImage}/>
                            </div>
                        </div>
                        <div className="parallax-text" style={{maxWidth: "780px"}}> {children} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;