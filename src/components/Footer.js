import React,{useEffect,useRef} from 'react'
import { FaArrowUp, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const TopBntref = useRef(null)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleTopBtn = () => {
        const pageOffset = window.pageYOffset * 2;
        const ViewPortHeight = window.innerHeight;
        if (pageOffset > ViewPortHeight) {
            TopBntref.current.style.bottom = '20px' 
        } else {
            TopBntref.current.style.bottom = '-40px' 
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',handleTopBtn)
    })
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
                <span className="top-btn" onClick={scrollToTop} ref={TopBntref}>
                    <FaArrowUp />
                </span>
            </div>
        </footer>
    )
}

export default Footer