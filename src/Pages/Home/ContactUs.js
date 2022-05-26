import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto w-full my-12'>
            <h2 className="text-3xl font-bold text-center mb-5">Contact With Us</h2>

            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/mB025R0/contact-1.jpg" class="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div class="card flex-shrink-0 w-full lg:w-3/4 shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea rows='5' cols='10' type="text" placeholder="password" class="textarea textarea-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;