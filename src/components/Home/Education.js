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
                                <p className="pass-year">2017 / DEC</p>
                            </Fade>
                            <Fade right>
                                <p className="university">Feni polytechinc institute</p>
                            </Fade>
                        </div>
                        <Fade left>
                            <p>In 2017 i Successfully passed Diploma Engineering from Feni polytechinc institute.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <div className="year">
                            <Fade top>
                                <p className="pass-year">2012 / jUNE</p>
                            </Fade>
                            <Fade right>
                                <p className="university">Mridhar hat high school</p>
                            </Fade>
                        </div>
                        <Fade left>
                            <p>In 2012 I Successfully passed Secondary school from Mridhar hat high school.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
