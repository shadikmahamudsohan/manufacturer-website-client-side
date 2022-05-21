import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="flex items-center justify-center">
            <div class="px-4 lg:py-12">
                <div class="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 class="font-bold text-primary text-9xl">404</h1>
                        <p class="mb-2 text-2xl font-bold text-center text-neutral md:text-3xl">
                            <span class="text-error">Oops!</span> Page not found
                        </p>
                        <p class="mb-8 text-center text-gray-500 md:text-lg">
                            The page you're looking for doesn't exist.
                        </p>
                        <Link className='btn btn-primary' to='/'>Go Home</Link>
                    </div>
                    <div class="mt-4">
                        <img
                            src="https://i.ibb.co/fHsRnfR/404.jpg"
                            alt="img"
                            class="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;