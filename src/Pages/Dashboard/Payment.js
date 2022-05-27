import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51L0erJFO4ypSR6bZcP2M1BZv8IdBPQHsUwLBgg7G5B06fU7bwGlqtdgWEXDQTrRJMmYFNVCBNt1G79Yk7GlVSSUa00BaitXEwA');


const Payment = () => {
    const { id } = useParams();

    const url = `https://quiet-basin-59724.herokuapp.com/get-single-order/${id}`;

    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (data?.message === "Forbidden access") {
        toast.error("Forbidden access");
        signOut(auth);
    }
    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card lg:w-1/2 pb-7 w-full bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-success font-bold">Hi {data?.name}</h2>
                    <p>Your are location: <strong>{data?.location}</strong></p>
                    <p>Your product is: <strong>{data?.productName}</strong></p>
                    <p>Your total price: <strong>{data?.price}$</strong></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm data={data} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;