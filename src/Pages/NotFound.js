import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-primary text-9xl">404</h1>
                        <p className="mb-2 text-2xl font-bold text-center text-neutral md:text-3xl">
                            <span className="text-error">Oops!</span> Page not found
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you're looking for doesn't exist.
                        </p>
                        <Link className='btn btn-primary' to='/'>Go Home</Link>
                    </div>
                    <div className="mt-4">
                        <img
                            src="https://i.ibb.co/fHsRnfR/404.jpg"
                            alt="img"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;