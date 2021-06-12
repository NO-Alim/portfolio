import React,{useEffect,useRef} from 'react'
import {FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <footer className="section">
            <div className="footer-center">
                <div className="social-container">
                    <Fade left>
                        <div className="social-icon"><a href="https://www.facebook.com/robertLoxly01"><FaFacebook /></a></div>
                    </Fade>
                    <Zoom>
                        <div className="social-icon"><a href="https://www.facebook.com/robertLoxly01"><FaLinkedin /></a></div>
                    </Zoom>
                    <Fade right>
                        <div className="social-icon"><a href="https://www.facebook.com/robertLoxly01"><FaTwitter /></a></div>
                    </Fade>
                </div>
                <p><span>© 2021</span> by Abdul Alim. Proudly created by Abdul Alim</p>
            </div>
        </footer>
    )
}

export default Footer