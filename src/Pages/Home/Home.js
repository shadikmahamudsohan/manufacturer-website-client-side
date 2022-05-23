import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Testimonial from './Testimonial/Testimonial';
import Tools from './Tools';
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;