import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import useToken from '../../Hooks/useToken.js';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);


    const [email, setEmail] = useState();

    const { register, formState: { errors }, handleSubmit } = useForm();


    let navigate = useNavigate();
    const location = localStorage.getItem('location');


    // if (user) {
    //     navigate(location);
    // }
    useEffect(() => {
        if (token) {
            navigate(location);
        }
    }, [token, navigate, location]);

    let signInError;

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message}</small></p>;
    }

    const onSubmit = data => {
        setEmail(data?.email);
        signInWithEmailAndPassword(data?.email, data?.password)
            .then(() => {
                toast.success('Logged In');
            });
    };

    // reset password
    const resetPassword = async () => {
        if (sending) {
            return <LoadingSpinner />;
        }
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email sended');
        } else {
            toast.error('Enter your email address');
        }
    };
    //----------------------
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to ToolsNestBD? <Link className='text-primary' to="/signup">Create New Account!</Link></small></p>
                    <p><small>Forget your password? <span onClick={resetPassword} className='text-primary cursor-pointer'>Create New password!</span></small></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;