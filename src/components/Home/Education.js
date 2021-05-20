import React from 'react'
import Fade from 'react-reveal/Fade';

const Education = () => {
    return (
        <div className="Education">
            <div className="education-content">
                <Fade top>
                    <h1 className="heading">Education</h1>
                </Fade>
                <div className="paras">
                    <div className="para">
                        <div className="year">
                            <Fade top>
                                <p className="pass-year">2003 / DEC</p>
                            </Fade>
                            <Fade right>
                                <p className="university">University Name</p>
                            </Fade>
                        </div>
                        <Fade left>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <div className="year">
                            <Fade top>
                                <p className="pass-year">2000 / JAN</p>
                            </Fade>
                            <Fade right>
                                <p className="university">University Name</p>
                            </Fade>
                        </div>
                        <Fade left>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
