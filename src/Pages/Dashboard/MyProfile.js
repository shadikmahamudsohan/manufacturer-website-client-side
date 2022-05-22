import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (loading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <h1 className='text-5xl font-bold text-danger mt-12'>{error.message}</h1>;
    }


    const onSubmit = data => {
        // signInWithEmailAndPassword(data.email, data.password);
        const userData = {
            name: user?.displayName,
            email: user?.email,
            location: data?.location,
            phone: data?.phone,
            eduction: data?.eduction,
            linkedIn: data?.linkedIn,
        };
        console.log(userData);
    };

    return (

        <div class="card w-auto lg:w-3/5 bg-base-100 shadow-xl relative">
            <div className="mb-12">
                {user?.photoURL ? <div class="avatar online absolute right-5 top-5">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div> : <div class="avatar online placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span>{user?.email.slice(0, 2)}</span>
                    </div>
                </div>}
            </div>
            <div class="card-body">
                <h1 className='text-xl'><strong>Name: </strong>{user?.displayName}</h1>
                <h1 className='text-xl'><strong>Email: </strong>{user?.email}</h1>
            </div>
            {/* form for user's information */}
            <div className="card-body">
                <p className='text-md'>Tell more about yourself:</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            {/* 1. location input */}
                            <label className="label">
                                <span className="label-text">Your location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Location"
                                className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.location.message}</span>}
                            </label>
                        </div>
                        <div>
                            {/* 2. eduction input */}
                            <label className="label">
                                <span className="label-text">Your eduction</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Education"
                                className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                {...register("eduction", {
                                    required: {
                                        value: true,
                                        message: 'eduction is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.eduction?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.eduction.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            {/* 3. phone number input */}
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Number"
                                className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'phone number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                            </label>
                        </div>
                        <div>
                            {/* 4. LinkedIn profile link input */}
                            <label className="label">
                                <span className="label-text">LinkedIn profile link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your LinkedIn"
                                className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.linkedIn.message}</span>}
                            </label>
                        </div>
                    </div>



                    <input className='btn w-full text-white' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;