import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Headroom from 'react-headroom'

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
    const toggleFalse = () =>{
        setMenu(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleFalse)
        document.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('scroll', toggleFalse)
            document.removeEventListener('click',handleClick)
        }
    })
    //navHeightref

    return (
        <>
        <Headroom>
        <nav ref={heightref}>
            <div className="nav-center">
                <div className="nav-logo">
                    <Fade right>
                        <Link to="/" className="logo">A</Link>
                    </Fade>
                </div>
                <div className={`link-container ${menu ? 'active' : ''}`}>
                    <div className="canceled-btn">
                        <div className="menu-container">
                        <div className={`menu ${menu ? 'active' : ''}`} onClick={toggleNav}>
                            <span className="menu-row"></span>
                            <span className="menu-row"></span>
                            <span className="menu-row"></span>
                        </div>
                        </div>
                    </div>
                    <ul className="links">
                    <Link to="/" className="Links-logo" onClick={() => setMenu(!menu)}>A</Link>
                        <Fade left>
                        <Fade left>
                            <li>
                                <Link to="/" className="link" onClick={() => setMenu(!menu)}><span className="nav-border"></span>Home</Link>
                            </li>
                        </Fade>
                        </Fade>
                        <Fade left>
                            <li>
                                <Link to="/projects" className="link" onClick={() => setMenu(!menu)}><span className="nav-border"></span>Blog</Link>
                            </li>
                        </Fade>
                    </ul>
                </div>
                <div className="menu-container menu-containerTwo">
                    <div className={`menu ${menu ? 'active' : ''}`} onClick={toggleNav}>
                        <span className="menu-row"></span>
                        <span className="menu-row"></span>
                        <span className="menu-row"></span>
                    </div>
                </div>
            </div>
        </nav>
        </Headroom>
        </>
    )
}

export default Navbar
