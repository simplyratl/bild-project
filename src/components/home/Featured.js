import React, { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { posts, textSlider } from "./sliders";

const Featured = () => {
    const slider = useRef(null);

    const settingsPosts = {
        centerMode: true,
        centerPadding: "220px",
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsText = {
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 4000,
                },
            },
        ],
    };

    return (
        <div className="featured">
            <div className="featured__wrapper">
                <div className="featured__top">
                    <h2 className="featured__heading">A Couple of Our Featured Projects</h2>

                    <p className="featured__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
                        vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
                        Suspendisse non urna mi, quis tincidunt eros.
                    </p>
                </div>

                <div className="post-slider">
                    <Slider {...settingsPosts}>
                        {posts().map((post, index) => (
                            <div className="slider-element" key={index}>
                                <img src={post.image} alt="" />
                                <a href="#" className="social-link"></a>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="text-slider">
                    <MdArrowBackIosNew onClick={() => slider?.current?.slickPrev()} className="arrow left" />

                    <Slider {...settingsText} ref={slider}>
                        {textSlider().map((text, index) => (
                            <div className="slider-element" key={index}>
                                <h4>{text.title}</h4>

                                <p>{text.info}</p>
                            </div>
                        ))}
                    </Slider>
                    <MdArrowForwardIos onClick={() => slider?.current?.slickNext()} className="arrow right" />
                </div>
            </div>
        </div>
    );
};

export default Featured;
