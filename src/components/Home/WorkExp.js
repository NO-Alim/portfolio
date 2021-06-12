import React from 'react'
import Fade from 'react-reveal/Fade';


const WorkExp = () => {

    return (
        <div className="workExp">
            <div className="work-content">
                <Fade top>
                    <h1 className="heading">Work Experience</h1>
                </Fade>
                <div className="paras">
                    <div className="para">
                        <Fade right cascade>
                            <p className="year">2019- Today</p>
                        </Fade>
                        <Fade left>
                            <p>currently i am working as a Front-End-Designer, which is where my passion for design and development converge.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <Fade left cascade>
                            <p className="year">2017 - 2019</p>
                        </Fade>
                        <Fade right>
                            <p>I start learning web design from 2017. I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <Fade right cascade>
                            <p className="year">2017 - Today</p>
                        </Fade>
                        <Fade left>
                            <p>I have another good  Experience. I'm a sub-assistant engineer in a multinational company's power plant.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp
