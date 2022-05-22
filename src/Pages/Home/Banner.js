import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-base-100 to-accent hero relative mt-16 lg:h-screen md:h-auto'>
            <div className='hero-content flex-col lg:flex-row'>
                <div>
                    <p
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className='text-xl'
                    >
                        We are the
                    </p>
                    <h1
                        data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900'
                        className='text-5xl font-bold'
                    >
                        Best tools manufacturer
                    </h1>
                    <h1 data-aos='fade-right'
                        data-aos-delay='450'
                        data-aos-duration='1000'
                        className='text-5xl font-bold'>
                        company
                    </h1>
                    <p
                        data-aos='fade-right'
                        data-aos-delay='600'
                        data-aos-duration='850'
                        className='py-6 max-w-xl'
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has
                    </p>
                    <button
                        data-aos='zoom-in'
                        data-aos-delay='1300'
                        className='btn btn-primary'
                    >
                        Get Started
                    </button>
                </div>
                <div className='shrink-0'>
                    <img data-aos='fade-left'
                        data-aos-delay='600'
                        data-aos-duration='800'
                        src="https://pngimg.com/uploads/drill/drill_PNG23.png"
                        className='h-full max-w-md' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;