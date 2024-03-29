import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const MyProfile = () => {
    const [user, loading, updateError] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let navigate = useNavigate();

    const url = `https://quiet-basin-59724.herokuapp.com/get-user/${user?.email}`;
    const { error, data, refetch } = useQuery('repoData', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));
    if (data?.message === 'Forbidden access') {
        navigate('/');
        signOut(auth);
        toast.error('JWT expired or not found');
        return;
    }


    if (data?.email !== user?.email) {
        refetch();
    }

    if (loading) {
        return <LoadingSpinner />;
    }

    if (updateError) {
        return <h1 className='text-5xl font-bold text-danger mt-12'>{updateError?.message || error.message}</h1>;
    }

    const onSubmit = async data => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            location: data?.location,
            phone: data?.phone,
            eduction: data?.eduction,
            linkedIn: data?.linkedIn,
        };
        const res = await axios.put(`https://quiet-basin-59724.herokuapp.com/update-user/${user?.email}`, (userData), {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (res) {
            toast.success('Profile Updated');
            reset();
            refetch();
            if (res?.message === 'Forbidden access') {
                navigate('/');
                signOut(auth);
                toast.error('JWT expired or not found');
                return;
            }
        }
    };
    return (
        <div className="flex justify-center items-center my-12">
            <div className="card w-full lg:w-3/5 bg-base-100 shadow-xl relative">
                <div className="mb-12">
                    {user?.photoURL ? <div className="avatar online absolute right-5 top-5">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div> : <div className="avatar online placeholder absolute right-5 top-5">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span>{user?.email.slice(0, 2)}</span>
                        </div>
                    </div>}
                </div>
                <div className="card-body">
                    {user &&
                        <>
                            <h1 className='text-xl'><strong>Name: </strong>{user?.displayName}</h1>
                            <h1 className='text-xl'><strong>Email: </strong>{user?.email}</h1>
                        </>}
                    {(data?.email === user.email && data?.location) &&
                        <>
                            <h1 className='text-xl'><strong>Location: </strong>{data.location}</h1>
                            <h1 className='text-xl'><strong>Phone: </strong>{data.phone}</h1>
                            <h1 className='text-xl'><strong>Eduction: </strong>{data.eduction}</h1>
                            <h1 className='text-xl'><strong>LinkedIn: </strong>{data.linkedIn}</h1>
                        </>}
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
                                <label className="label mt-2">
                                    {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.linkedIn.message}</span>}
                                </label>
                            </div>
                        </div>
                        <input className='btn w-full text-white' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;