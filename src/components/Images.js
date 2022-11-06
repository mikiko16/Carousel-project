import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const length = slides.length
    let timeOut = null

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            nextSlide();
        }, 2500)
    })

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)
    return (
        <section className="slider">
            <div
                onMouseEnter={() => {
                    setAutoPlay(false)
                    clearTimeout(timeOut)
                }}
                onMouseLeave={() => {
                    setAutoPlay(true)
                }}>
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} alt='travel image' className="image" />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Slider;