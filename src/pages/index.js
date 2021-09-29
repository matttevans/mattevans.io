import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Animation from "../components/Animation"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

/*
const images = [
    "../images/headstrong-screenshot.png",
    "../images/athleteacademy-screenshot.png",
    "../images/lngworldfleet-screenshot.png",
    "../images/ionshare-screenshot.png",
]*/
const images = [
    data.headstrongImage,
    data.athleteacademyImage,
    data.lngworldfleetImage,
    data.ionshareImage,
]

const anchors = [
    "#a",
    "#b",
    "#c",
    "#d",
]

const IndexPage = () => (
    <Layout>
        <SEO title="Matt Evans"/>
        <Header></Header>
        <About></About>
        <Work anchors={anchors} images={images}>
            <div className="work-text">
                <p className="work-spacer-first"></p>
                <div className="client">
                    <h2 id="a">Headstrong Fit</h2>
                    <h3 className="link"><a href="https://headstrongfit.com">https://headstrongfit.com</a></h3>
                    <h3 className="text-center">My Role:</h3>
                    <Fade up cascade>
                        <p>Lead full stack web developer and business ops consultant.</p>
                    </Fade>
                    <Fade right cascade>
                        <ul>
                            <li>Built in Laravel 8 & Bootstrap 4</li>
                            <li>Server: LAMP on AWS Lightsail</li>
                            <li>Database: MySQL 8 on AWS Lightsail</li>
                            <li>Zapier & Stripe automation</li>
                            <li>Email handled by AWS Simple Email Service (SES)</li>
                            <li>Protected by Cloudflare & Google ReCaptcha</li>
                            <li>Analytics by Google Analytics</li>
                            <li>Web development managed by Jira & Confluence</li>
                            <li>CI/CD via GitHub actions</li>
                            <li>Built with PHPStorm</li>
                        </ul>
                    </Fade>
                </div>
                <div className="client">
                    <h2 id="b">Athlete Academy</h2>
                    <h3 className="link"><a href="https://athleteacademy.us">https://athleteacademy.us</a></h3>
                    <h3 className="text-center">My Role:</h3>
                    <Fade up cascade>
                        <p>Full stack web developer and business ops consultant.</p>
                    </Fade>
                    <Fade right cascade>
                        <ul>
                            <li>Built with DropFunnels</li>
                            <li>Zapier & Stripe automation</li>
                            <li>Protected by Cloudflare</li>
                            <li>Analytics by Google Analytics</li>
                            <li>Business operations managed by Jira & Confluence</li>
                        </ul>
                    </Fade>
                </div>
                <div className="client">
                    <h2 id="c">LNG World Fleet</h2>
                    <h3 className="link"><a href="https://lngworldfleet.com">https://lngworldfleet.com</a></h3>
                    <h3 className="text-center">My Role:</h3>
                    <Fade up cascade>
                        <p>Full stack web developer and owner. Created as a hobby.</p>
                    </Fade>
                    <Fade right cascade>
                        <ul>
                            <li>Built with Laravel 8 & Bootstrap 4</li>
                            <li>Server: LAMP on AWS Lightsail</li>
                            <li>Database: MySQL 8 on AWS Lightsail</li>
                            <li>Contains every LNG ship in history</li>
                            <li>All data scraped from public websites using Python</li>
                            <li>Built with PHPStorm</li>
                        </ul>
                    </Fade>
                </div>
                <div className="client">
                    <h2 id="d">ionshare</h2>
                    <h3 className="link"><a href="https://ionshare.io">https://ionshare.io</a></h3>
                    <h3 className="text-center">My Role:</h3>
                    <Fade up cascade>
                        <p>Full stack web developer and owner. Created as a hobby.</p>
                    </Fade>
                    <Fade right cascade>
                        <ul>
                            <li>Built with Laravel 8 & Bootstrap 4</li>
                            <li>Server: LAMP on Debian 10 hosted on AWS EC2</li>
                            <li>Database: MySQL 8 on AWS RDS</li>
                            <li>File storage handled with AWS S3</li>
                            <li>Full user & file logging</li>
                            <li>Built with PHPStorm</li>
                        </ul>
                    </Fade>
                </div>
                <p></p>
            </div>
        </Work>
        <Skills></Skills>
        <Animation></Animation>
        <Footer></Footer>
    </Layout>
)

export default IndexPage
