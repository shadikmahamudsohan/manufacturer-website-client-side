import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Slider from "react-slick";
import './Testimonial.css';
import Review from './Review';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://quiet-basin-59724.herokuapp.com/get-review')
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
            <h1 className="text-3xl text-center text-primary font-bold">See What our Client says</h1>
            <Slider {...settings} className="py-10 rounded-3xl">
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </Slider>
        </div>
    );
};

export default Testimonial;