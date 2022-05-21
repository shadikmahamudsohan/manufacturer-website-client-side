import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-primary mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-base-100"
                        href="#pablo"
                    >
                        ToolsNestBD
                    </a>
                    <button
                        className="text-base-100 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <HiMenu />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:w-auto sm:w-full">
                        <li className="nav-item">
                            <Link
                                className="px-4 py-3 flex items-center text-sm uppercase font-bold leading-snug text-base-100 hover:opacity-75"
                                to="/"
                            >
                                <span className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-4 py-3 flex items-center text-sm uppercase font-bold leading-snug text-base-100 hover:opacity-75"
                                to="/login"
                            >
                                <span className="ml-2">Login</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;