import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Tools />
            <BusinessSummary />
        </div>
    );
};

export default Home;