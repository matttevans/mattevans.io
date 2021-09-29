import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Bounce from "react-reveal/Bounce"
import Slide from "react-reveal/Slide"

const About = () => {
    return (
        <div className="secion" id="about">
            <div className="container">
                <div className="about-section">
                    <div className="content">
                        <Fade bottom cascade>
                            <h1>About Me</h1>
                        </Fade>
                        <p>
                            {data.aboutParaOne}
                            <br></br>
                            <br></br>
                            {data.aboutParaTwo}
                            <br></br>
                            <br></br>
                            {data.aboutParaThree}
                            <br></br>
                            <br></br>
                            {data.aboutParaFour}
                        </p>
                        <Fade bottom cascade>
                            <h1>Hobbies</h1>
                        </Fade>
                        <div className="hobby-icons">
                            {data.hobbies.map((hobby, index) => (
                                <Slide left>
                                    <img src={hobby.img} alt="icons"></img>
                                </Slide>
                            ))}
                        </div>
                    </div>
                    <Slide right>
                        <div className="image-wrapper">
                            <img src={data.aboutImage} alt="about"></img>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default About
