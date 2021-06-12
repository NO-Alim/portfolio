import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <Fade top>
                    <h1 className="heading">Contact</h1>
                </Fade>
                <div className="paras">
                    <Fade left>
                        <div className="para">
                            <p>39 NO. South Halishahar</p>
                            <p>Chattogram, CTG 400</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="para">
                            <p>abdulalimrakib53@gmail.com</p>
                            <p>Tel: +8801537-501-420</p>
                        </div>
                    </Fade>
                    {/* <div className="para">
                        <div className="social-container">
                            <div className="social-icon"><a href="facebook.com"><FaFacebook /></a></div>
                            <div className="social-icon"><a href="linkedin.in"><FaLinkedin /></a></div>
                            <div className="social-icon"><a href="twitter.com"><FaTwitter /></a></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact
