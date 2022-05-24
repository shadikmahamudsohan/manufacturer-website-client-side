import React, { useEffect, useState } from 'react';
import SingleTools from './SingleTools';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/get-product")
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-4xl text-primary my-12">Our Best Manufacturing Tools</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12'>
                {tools.slice(0, 3).map(tool => <SingleTools key={tool._id} data={tool} />)}
            </div>
        </div>
    );
};

export default Tools;