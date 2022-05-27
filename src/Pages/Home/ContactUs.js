import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto w-full my-12'>
            <h2 className="text-3xl font-bold text-center mb-5">Contact With Us</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/mB025R0/contact-1.jpg" className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className="card flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea rows='5' cols='10' type="text" placeholder="password" className="textarea textarea-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;