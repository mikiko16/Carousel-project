import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import ReactPlayer from "react-player/lazy";

const Slider = ({ slides }) => {
    const props = slides[0]
    const data = slides[1]
    const [current, setCurrent] = useState(props.initialIndex)
    const [autoPlay, setAutoPlay] = useState(props.autoplay)
    const length = data.length
    let timeOut = null

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            nextSlide();
        }, props.autoplayInterval)
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
                {data.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && slide.image && (
                                    <img src={slide.image} alt='travel image' className="image" />
                                )}
                                {index === current && slide.video && (
                                    <ReactPlayer url={slide.video} playing={true} className="image"/> 
                                )}
                            </div>
                        );
                })}
            </div>
        </section>
    );
};

export default Slider;