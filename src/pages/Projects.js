import React, { useState } from 'react';
import data  from '../components/data'
import './projects.css'
import { FaSearch, FaTimes,FaEllipsisV,FaHeart } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';


const Projects = () => {
    const [isActive, setIsActive] = useState(false);

    const [projects, setProjects] = useState(data);

    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <section className="projects">
                <div className="projects-content">
                        <h1 className="main-heading">My Articles</h1>
                    <div className="projects-header">
                        <p>Articles</p>
                        <form className={`form ${isActive ? 'active': ''}`}>
                            <div className="default">
                                <span onClick={toggleClass}><FaSearch /></span>
                            </div>
                            <Fade right>
                                <div className="form-active">
                                    <span><FaSearch /></span>
                                    <input type="text" placeholder="Reachercher" />
                                    <span onClick={toggleClass}><FaTimes /></span>
                                </div>
                            </Fade>
                        </form>
                    </div>
                    {projects.map((project, index) => {
                        const {id,img,heading,semiHeading} = project;
                        return (
                            <article className="project" key={id}>
                                <Fade left>
                                    <img src={img} alt="" />
                                </Fade>
                                <Fade right>
                                    <div className="project-content">
                                        <span className="dots"><FaEllipsisV /></span>
                                        <div className="text">
                                            <h1 className="project-heading">{heading}</h1>
                                            <p className="project-parA">{semiHeading}</p>
                                        </div>
                                        <div className="client-content">
                                            <div className="comment">
                                                <span>0 vue</span>
                                                <span>0 comment</span>
                                            </div>
                                            <div className="like">
                                                <span>2 <FaHeart /></span>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects
