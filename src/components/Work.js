import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from "../yourdata"
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const section = useRef();
  const sectionContent = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const tl = useRef();

  const setupTimeline = () => {
    if (tl.current) tl.current.kill();
    console.log("sectionContent", sectionContent.current.offsetHeight);
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "center center",
        end: () => "+=" + window.innerHeight,
        scrub: true,
        pin: true,
        anticipatePin: 1
      },
      defaults: { ease: "none" }
    });
    tl.current.fromTo(
        text1.current,
        { y: section.current.offsetHeight, rotation: 0, x: 0 },
        { y: 0, rotation: 0 }
    );
  };

  useEffect(() => {
    setupTimeline();
    return () => {
      if (tl.current) tl.current.kill();
    };
  }, []);

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <div className="heading-front">
              <h1>Some of my</h1>
            </div>
            <div className="heading-back">
              <h1>Work</h1>
            </div>
          </Fade>
          <div className="placeholder">
            <h1>Content placeholder</h1>
          </div>
          <div className="row" ref={section}>
            <div className="column left slide__content" ref={sectionContent}>
              <h1 ref={text1}>Hello CodeSandbox</h1>
            </div>
            <div className="column right slide__image">
              <img src="https://www.fillmurray.com/640/360" alt=""/>
            </div>
          </div>
          <div className="placeholder">
            <h2>Content placeholder</h2>
          </div>
          <div className="placeholder">
            <h2>Content placeholder</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
