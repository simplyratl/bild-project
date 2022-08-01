import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
    const [posts, setPosts] = useState([]);
    const [textSlider, setTextSlider] = useState([]);

    const slider = useRef(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios("http://localhost:4000/slider");
                setPosts(res.data);

                return res;
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchText = async () => {
            try {
                const res = await axios("http://localhost:4000/slider-text");
                setTextSlider(res.data);

                return res;
            } catch (error) {
                console.log(error);
            }
        };
        fetchText();
    }, []);

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
                breakpoint: 600,
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
                        {posts.map((post, index) => (
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
                        {textSlider.map((text, index) => (
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
