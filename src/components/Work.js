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
            <h1 className="title-front">Some of my</h1>
            <h1 className="title-back">Work</h1>
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
          <div class="">

          </div>
          <div className="grid">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
