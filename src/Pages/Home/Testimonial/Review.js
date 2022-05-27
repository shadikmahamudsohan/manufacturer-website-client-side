import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className='px-10 text-center'>
                <div className='px-10 py-6 pb-10 rounded-xl bg-primary md:min-h-full lg: text-base-100'>
                    <p className='text-lg'>{review?.description}</p>
                    <p className='text-xl font-bold my-2'>Rating: <span className='text-warning'>{review?.rating}</span></p>
                    <h2 className='text-xl'>{review?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;