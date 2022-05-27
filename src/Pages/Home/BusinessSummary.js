import React from 'react';
import { GiFlyingFlag } from 'react-icons/gi';
import { MdOutlineDevices } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { AiTwotoneLike } from 'react-icons/ai';

const BusinessSummary = () => {
    return (
        <div className="container mx-auto rounded-3xl hero py-8 my-32 bg-info " style={{ backgroundImage: "url('https://i.ibb.co/zJn87wn/World-Map-PNG-Clipart-1.png')" }}>
            <div className="hero-content text-center">
                <div className="text-base-100">
                    <h1 className="text-5xl font-bold uppercase">Millions business trust us</h1>
                    <h2 className="mt-3 text-2xl uppercase">Try to understand users expectation</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-16 my-16">
                        <div className='flex flex-col items-center'>
                            <GiFlyingFlag className="text-5xl" />
                            <p className='text-5xl font-bold'>100</p>
                            <p className="text-2xl text-base-100">Countries</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <MdOutlineDevices className="text-5xl" />
                            <p className='text-5xl font-bold'>500</p>
                            <p className="text-2xl text-base-100">Complete Projects</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <IoIosPeople className="text-5xl" />
                            <p className='text-5xl font-bold'>499</p>
                            <p className="text-2xl text-base-100">Happy Clients</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <AiTwotoneLike className="text-5xl" />
                            <p className='text-5xl font-bold'>340</p>
                            <p className="text-2xl text-base-100">Feedback</p>
                        </div>
                    </div>
                    <div className="card lg:max-w-5xl md:max-w-full shadow-xl bg-base-100 grid grid-cols-1 lg:grid-cols-3 items-center gap-x-5 mt-5 px-12 py-5">
                        <div className='text-left col-span-2'>
                            <h1 className="text-4xl text-secondary">Do you have any question about our service?</h1>
                            <h2 className="text-2xl text-neutral">Then please contact us?</h2>
                        </div>
                        <div className='flex justify-around'>
                            <div className="btn btn-secondary">Request For Quote</div>
                            <div className="btn btn-natural">Contact us</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;