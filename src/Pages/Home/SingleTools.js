import React, { useState } from 'react';

const SingleTools = ({ data }) => {
    const [seeMore, setSeeMore] = useState(false);

    const {
        name,
        img,
        description,
        perUnitPrice,
        minimumOrder,
        availableQuantity } = data;
    return (
        <div class="card lg:w-96 sm:w-full bg-base-200 shadow-xl hover:translate-y-[-10px] transition outline outline-0 outline-primary hover:outline-2" >
            <figure><img src={img} alt="Shoes" className='w-full' /></figure>
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                {seeMore && <>
                    <p><strong>Per Unit Price: </strong>{perUnitPrice}</p>
                    <p><strong>Minimum Order: </strong>{minimumOrder}</p>
                    <p><strong>Available Quantity:</strong>{availableQuantity}</p>
                    <p><strong>Description: </strong>{description}</p>
                </>}
                <div className="flex justify-between items-center">
                    <div className="">
                        <button onClick={() => setSeeMore(!seeMore)} className='btn-link font-bold'>{seeMore ? 'See Less...' : 'See More...'}</button>
                    </div>
                    <div class="">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleTools;