import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from "react-slick";
import './Testimonial.css';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/get-review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BsFillArrowRightCircleFill size='30' />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <BsFillArrowLeftCircleFill size='30' />
            </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className='container mx-auto mb-24'>
            <Slider {...settings} className="py-10 rounded-3xl">
                {reviews.map((review, index) =>
                    <div className='px-10 text-center' key={index}>
                        <div className='px-10 py-6 pb-10 rounded-xl bg-primary md:min-h-full lg: text-base-100'>{
                            <><p className='text-lg'>{review.description}</p>
                                <p className='text-xl text-warning font-bold'>{review.rating}</p>
                                <h2 className='text-xl'>{review.name}</h2></>
                        }</div>
                    </div>)}
            </Slider>
        </div>
    );
};

export default Testimonial;