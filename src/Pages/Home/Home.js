import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Footer />
        </div>
    );
};

export default Home;