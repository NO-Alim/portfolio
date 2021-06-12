import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="about">
            <Fade top>
            <h1 className="heading">About Me</h1>
            <Fade top>
            <strong>Hi, I'm Abdul Alim. I'm a Multi-talented human with few years of experiences in front-end-design.I help designers, small agencies and businesses bring their ideas to life.</strong>
            </Fade>
            </Fade>
            <Fade left>
            <p>I spent the last Four years working as a Front-end-designer. I acquired project and time management skills, as well as the ability to communicate with team members and clients while effectively meeting milestones and deadlines.I have worked on multiple 
            of Responsive Web Design  projects  
            using (Photoshop, Illustrator) and Development (HTML, CSS, scss, JS, react, Redux etc.).</p>
            </Fade>
            <br/>
            <br/>
            <Fade right>
            <p>I am currently working from bangladesh. I am always available to discuss your project over the phone or via whatsapp. These days I enjoy spending my free time photography, Traveling and watching movie.</p>
            </Fade>
        </div>
    )
}

export default About
