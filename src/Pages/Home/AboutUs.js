import React from 'react';

const AboutUs = () => {
    return (
        <section style={{ background: `url("https://i.ibb.co/5KQpxMh/bg-img-1.jpg")` }} className='flex justify-center items-center container my-20 mx-auto'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src="https://i.ibb.co/C27mWMD/enginer-1-removebg-preview.png" alt="" />
            </div>
            <div className='flex-1 px-5 sm:p-5 bg-base-100 text-neutral p-5 rounded-l-lg shadow-lg border-l-2 border-neutral'>
                <h3 className='text-xl text-primary font-bold'>About Us</h3>
                <h2 className='text-3xl  py-5'>We make many tools</h2>
                <p className=' pb-5'>Tooling is created by a toolmaker who has a comprehensive understanding of the product design and creates parts or tools to be used in the manufacture of the designs. It involves high precision and machine tools to manufacture, hold, or test parts or products throughout their production phase. We make the perfect took for you.</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
        </section>
    );
};

export default AboutUs;