import React,{useState, useEffect} from 'react'
import About from '../components/Home/About'
import Education from '../components/Home/Education'
import Header from '../components/Home/Header'
import WorkExp from '../components/Home/WorkExp'
import { Link } from 'react-router-dom'
import Contact from '../components/Home/Contact'
import userEvent from '@testing-library/user-event'

import {Link as ScrollLink} from 'react-scroll'
import {Element} from 'react-scroll'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <section className="home">
            <div className="side-btn-container">
                <div className="side-btns">
                    <Fade top>
                    <Fade top>
                        <ScrollLink  activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={500} className="side-content">
                            <p className="btn-name">About</p>
                        
                            <span className="side-btn"></span>
                        </ScrollLink>
                    </Fade>
                    </Fade>
                    <Fade top>
                        <ScrollLink  activeClass="active" to="work" spy={true} smooth={true} offset={-150} duration={500} className="side-content">
                            <p className="btn-name">work</p>
                        <span className="side-btn"></span>
                        </ScrollLink>
                    </Fade>
                    <Fade bottom>
                        <ScrollLink  activeClass="active" to="education" spy={true} smooth={true} offset={-150}  duration={500} className="side-content">
                            <p className="btn-name">Education</p>
                        <span className="side-btn"></span>
                        </ScrollLink>
                    </Fade>
                    <Fade bottom>
                    <Fade bottom>
                        <ScrollLink  activeClass="active" to="contact" spy={true} smooth={true}  offset={-150} duration={500} className="side-content">
                            <p className="btn-name">contact</p>
                        <span className="side-btn"></span>
                        </ScrollLink>
                    </Fade>
                    </Fade>
                </div>
            </div>
            <div>
                <Header />
            </div>
            <Element name="about">
                <About/>
            </Element>
            <Element name="work">
                <WorkExp/>
            </Element>
            <Element name="education">
                <Education/>
            </Element>
            <Link to="/projects" className="projects-btn">View My Projects</Link>
            <div name="contact">
                <Contact/>
            </div>
            
        </section>
    )
}

export default Home
