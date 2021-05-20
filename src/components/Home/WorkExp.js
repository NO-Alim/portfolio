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
                            <p className="year">2013- Today</p>
                        </Fade>
                        <Fade left>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <Fade left cascade>
                            <p className="year">2007 - 2013</p>
                        </Fade>
                        <Fade right>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        </Fade>
                    </div>
                    <div className="para">
                        <Fade right cascade>
                            <p className="year">2004 - 2007</p>
                        </Fade>
                        <Fade left>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExp
