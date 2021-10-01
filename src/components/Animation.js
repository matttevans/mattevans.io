import React, {useRef, useEffect, useState} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import data from "../yourdata"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'Beautiful animations',
        subtitle: 'Creating elegant, smooth scrollytelling using GSAP ScrollTrigger and React Reveal',
        image: data.gsapImage,
    },
    {
        title: 'Beautiful code',
        subtitle: 'Writing clean, readable, scalable code',
        image: data.csharpImage,
    }
];

const Animation = () => {

    const headerRef = useRef(null);

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {

        gsap.from(headerRef.current, {
            autoAlpha: 0,
            ease: 'none',
            delay: 1
        });

        revealRefs.current.forEach((el, index) => {

            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });

        });

    }, []);

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
    return (
        <div className="animation-wrapper" id="animation">
            <div className="container">
                {
                    sections.map(({title, subtitle, image}) => (
                        <div className="animation-section " key={title} ref={addToRefs}>
                            <div className="animation-content">
                                <Slide left>
                                    <div className="animation-heading">
                                        <h1>
                                            {title}
                                        </h1>
                                    </div>
                                </Slide>
                                <Roll left>
                                    <h2>
                                        {subtitle}
                                    </h2>
                                </Roll>
                            </div>
                            <Zoom right>
                                <div className="image-wrapper image-gradient">
                                    <img src={image} alt="animation"></img>
                                </div>
                            </Zoom>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Animation;