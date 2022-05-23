import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const review = {
            name: user?.displayName,
            description: data.description,
            rating: data.rating
        };
        const res = await axios.post(`http://localhost:5000/add-review`, (review));
        console.log(res);
        toast.success('Review Added');
        reset();
    };
    return (
        <div className='card shadow-xl rounded-3xl px-10 py-5 bg-base-100 '>
            <h1 className='text-secondary text-3xl text-center mb-5 font-bold'>My reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* 1. location input */}
                    <label className="label">
                        <span className="label-text">Your location</span>
                    </label>
                    <textarea
                        type="text"
                        rows="6"
                        cols="50"
                        maxLength="150"
                        placeholder="Your Description"
                        className="input input-bordered w-full h-auto"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'A short description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                    </label>
                </div>
                <div>
                    {/* 3. rating number input */}
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Number"
                        className="input input-bordered w-full"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Please rate use form 1 tp 5'
                            },
                            pattern: {
                                value: /^[1-5]$/,
                                message: 'You can user 1-5 numbers'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.rating.message}</span>}
                    </label>
                    {errors?.rating?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                </div>
                <div>
                </div>
                <input className='btn w-full text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddReviews;