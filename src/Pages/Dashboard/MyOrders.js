import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import Order from './Order';
import ProductDeleteConfirm from './ProductDeleteConfirm';

const MyOrders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/get-order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (users?.message === 'Forbidden access') {
        signOut(auth);
        toast.error('JWT expired or not found');
        return;
    }

    const getData = (data) => {
        setDeletingProduct(data);
    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className="flex justify-center items-center my-12">
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delate</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <Order
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                getData={getData}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <ProductDeleteConfirm
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingDoctor={setDeletingProduct}
                htmlFor="delete-confirm-order"
            />}
        </div>
    );
};

export default MyOrders;