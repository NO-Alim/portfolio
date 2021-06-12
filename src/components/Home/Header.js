import userEvent from '@testing-library/user-event'
import React from 'react'
import Typical from 'react-typical'
import ImgSvg from './ImgSvg'
import './Header.scss'
//https://static.wixstatic.com/media/4eda48daf63a4a56affcc1071f202390.jpg/v1/fill/w_708,h_492,al_c,q_80,usm_0.66_1.00_0.01/4eda48daf63a4a56affcc1071f202390.webp
//https://cdn.pixabay.com/photo/2020/09/29/23/38/team-5614157_960_720.png
const Header = () => {
    return (
        <div className="header-sec section">
            <ImgSvg />
            <div className="text-content">
                <h1>Hello I'm Abdul Alim</h1>
                <h3>I'm a <Typical steps={['javascript developer', 3000, 'front-end developer', 3000]} loop={Infinity} wrapper="p" /></h3>
            </div>
        </div>
    )
}

export default Header
