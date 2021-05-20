import userEvent from '@testing-library/user-event'
import React,{useState, useEffect, useRef} from 'react'
import mainImg from '../../img/img.png'
import Typical from 'react-typical'

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const buttonref = useRef(null)
    const pararef = useRef(null)

    useEffect(() => {
        const wind = () => {
            const pageOffset = window.pageYOffset * 2;
            const ViewPortHeight = window.innerHeight;
            if (pageOffset > ViewPortHeight) {
                buttonref.current.style.width = '50px'
                buttonref.current.style.height = '50px'
                buttonref.current.style.top = '79%'
                buttonref.current.style.background = 'rgb(255, 224, 240)'
                buttonref.current.style.borderRadius = '50%'
                buttonref.current.innerHTML = 'chat'
                buttonref.current.style.fontSize = '16px'
            } else {
                buttonref.current.style.width = '100px'
                buttonref.current.style.height = '50px'
                //10%
                buttonref.current.style.top = '10%';
                buttonref.current.style.borderRadius = '5px'
                buttonref.current.style.background = 'transparent'
                buttonref.current.innerHTML = `Let's talk`
                buttonref.current.style.fontSize = '18px'
            }
        };
        //     const paraX = pararef.current.getBoundingClientRect();
        //     // console.log(paraX.top);
        window.addEventListener('scroll', wind)
        return () => {
            window.removeEventListener('scroll', wind)
        }
    })

    return (
        <div className="header section">
            <div className="img-container">
                <img src="https://static.wixstatic.com/media/4eda48daf63a4a56affcc1071f202390.jpg/v1/fill/w_708,h_492,al_c,q_80,usm_0.66_1.00_0.01/4eda48daf63a4a56affcc1071f202390.webp" alt=""/>
                <div className="content">
                    <div className="box-body">
                        <div class="box">
                        </div>
                        <div className="box-content">
                            <h1><span className="single-letter">a</span>rodriguez</h1>
                            <p>I'm a<Typical
                            steps={['javascript developer', 3000, 'front-end developer', 3000]}
                            loop={Infinity}
                            wrapper="p" />
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="chat" ref={buttonref}>Let's talk</button>
        </div>
    )
}

export default Header
