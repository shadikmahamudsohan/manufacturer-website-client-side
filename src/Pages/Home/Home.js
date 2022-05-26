import React from 'react';
import Footer from '../../Shared/Footer';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Testimonial from './Testimonial/Testimonial';
import Tools from './Tools';
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Tools />
            <BusinessSummary />
            <ContactUs />
            <AboutUs />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;