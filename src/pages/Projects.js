import React, { useState } from 'react';
import data  from '../components/data'

import { FaSearch, FaTimes,FaEllipsisV,FaHeart } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Projects = () => {
    const [isActive, setIsActive] = useState(false);

    //const [projects, setProjects] = useState(data);

    //redux all posts
    const projects = useSelector(state => state.posts);
    //redux filter posts


    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <section className="projects">
                <div className="projects-content">
                    {/* {posts.map((post, ind) => {
                        const {heading} = post;
                        return (
                            <h3 key={ind}>{heading}</h3>
                        )
                    })} */}
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
                    {projects.map((post, index) => {
                        const {id,img,heading,semiHeading} = post;
                        return (
                            <Link to={`/posts/${post.id}`} className="project" key={id}>
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
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects