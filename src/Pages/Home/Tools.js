import React from 'react';
import SingleTools from './SingleTools';

const Tools = () => {
    const data = [
        {
            _id: 1,
            name: "No name",
            description: 'If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose',
            img: "https://api.lorem.space/image/shoes?w=400&h=225",
            perUnitPrice: 50,
            minimumOrder: 100,
            availableQuantity: 500,
        },
        {
            _id: 2,
            name: "No name",
            description: 'If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose',
            img: "https://api.lorem.space/image/shoes?w=400&h=225",
            perUnitPrice: 50,
            minimumOrder: 100,
            availableQuantity: 500,
        },
        {
            _id: 3,
            name: "No name",
            description: 'If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose. If a dog chews shoes whose shoes does he choose',
            img: "https://api.lorem.space/image/shoes?w=400&h=225",
            perUnitPrice: 50,
            minimumOrder: 100,
            availableQuantity: 500,
        },
    ];
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 my-12'>
            {data.splice(0, 3).map(data => <SingleTools key={data._id} data={data} />)}
        </div>
    );
};

export default Tools;