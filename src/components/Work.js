import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"
import { gsap } from "gsap";

import data from "../yourdata"

const Work = () => {
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

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
          <div className="grid">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
