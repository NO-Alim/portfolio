import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const heightref  = useRef(null);

    const handleClick = (e) => {
        if (!heightref.current.contains(e.target)) {
            setMenu(false)
        }
    }

    const toggleNav = () => {
        setMenu(!menu);
    }
    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click',handleClick)
        }
    })
    //navHeightref

    return (
        <nav className='section' ref={heightref}>
            <div className="nav-center">
                <div className="nav-logo">
                    <Fade right>
                        <Link to="/" className="logo">Logo</Link>
                    </Fade>
                </div>
                <div className={`link-container ${menu ? 'active' : ''}`}>
                    <div className="cancle-btn">
                        <div className="menu-container">
                        <div className={`menu ${menu ? 'active' : ''}`} onClick={toggleNav}>
                            <span className="menu-row"></span>
                            <span className="menu-row"></span>
                            <span className="menu-row"></span>
                        </div>
                        </div>
                    </div>
                    <ul className="links">
                        <Fade left>
                        <Fade left>
                            <li>
                                <Link to="/" className="link"><span className="nav-border"></span>Home</Link>
                            </li>
                        </Fade>
                        </Fade>
                        <Fade left>
                            <li>
                                <Link to="/projects" className="link"><span className="nav-border"></span>Projects</Link>
                            </li>
                        </Fade>
                    </ul>
                </div>
                <div className="menu-container">
                    <div className={`menu ${menu ? 'active' : ''}`} onClick={toggleNav}>
                        <span className="menu-row"></span>
                        <span className="menu-row"></span>
                        <span className="menu-row"></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
