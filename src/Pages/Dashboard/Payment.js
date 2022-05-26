import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const Payment = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/get-single-order/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                if (data.message === "Forbidden access") {
                    toast.error("Forbidden access");
                    signOut(auth);
                };
            });
    }, [id]);
    return (
        <div>
            <h1 className='text-3xl'>
                Hi {data?.name}
            </h1>
        </div>
    );
};

export default Payment;