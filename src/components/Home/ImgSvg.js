import React from 'react'
import './imgSvg.scss'

const ImgSvg = () => {
    return (
        <div className="mainSvg">
            <div className="scene">
                <div className="layer layer-1">
                    <div className="desk"></div>
                        <div className="plant">
                            <div className="plant-stalk"></div>
                            <div className="plant-leaf"></div>
                            <div className="plant-leaf"></div>
                        </div>
                        <div className="lamp">
                            <div className="lamp-base"></div>
                            <div className="lamp-mid">
                                <div className="lamp-mid-knob"></div>
                            </div>
                            <div className="lamp-top"></div>
                        </div>
                        <div className="lamp-light"></div>
                        <div className="laptop"></div>
                        <div className="book"></div>
                        <div className="book-1"></div>
                        <div className="book-2"></div>
                        <div className="coffee">
                            <div className="coffee-handle"></div>
                            <div className="coffee-brew"></div>
                        </div>
                        <div className="glass"></div>
                    </div>
                <div className="layer layer-2">
                </div>
                <div className="layer layer-3">
                    <div className="painting">
                        <div className="painting-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgSvg
