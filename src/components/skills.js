import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"

const Skills = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="skills-container">
                    <Fade bottom>
                        <div className="heading-front">
                            <h1>What I can offer</h1>
                        </div>
                        <div className="heading-back">
                            <h1>you</h1>
                        </div>
                    </Fade>
                    <div className="skills-grid">
                        {data.skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <Fade down cascade>
                                    <img src={skill.img} alt="css"></img>
                                </Fade>
                                <Fade up cascade>
                                    <p>{skill.para}</p>
                                </Fade>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
