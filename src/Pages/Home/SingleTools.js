import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({ data }) => {
    const [seeMore, setSeeMore] = useState(false);
    const navigate = useNavigate();
    const {
        _id,
        name,
        image,
        description,
        parUnitPrice,
        minOrder,
        available } = data;
    const handlePurchase = (id) => {
        navigate(`purchase/${id}`);
    };
    return (
        <div class="card lg:w-96 sm:w-full bg-base-100 hover:bg-base-300 shadow-xl hover:translate-y-[-10px] transition outline outline-0 outline-primary hover:outline-2" >
            <figure><img src={image} alt="Shoes" className='w-full' /></figure>
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p><strong>Per Unit Price: </strong>{parUnitPrice}$</p>
                {seeMore && <>
                    <p><strong>Minimum Order: </strong>{minOrder}</p>
                    <p><strong>Available Quantity: </strong>{available}</p>
                    <p><strong>Description: </strong>{description}</p>
                </>}
                <div className="flex justify-between items-center">
                    <div className="">
                        <button onClick={() => setSeeMore(!seeMore)} className='btn-link font-bold'>{seeMore ? 'See Less...' : 'See More...'}</button>
                    </div>
                    <div class="">
                        <button onClick={() => handlePurchase(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleTools;