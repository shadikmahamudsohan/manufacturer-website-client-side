import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import Order from './Order';
import { useAuthState } from 'react-firebase-hooks/auth';

import ProductDeleteConfirm from './ProductDeleteConfirm';

const MyOrders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [user, loading] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery(['users', user], () => fetch(`https://quiet-basin-59724.herokuapp.com/get-order/${user?.email}`, {
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

    if (isLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className="flex justify-center items-center my-12">
            {(users.length === 0) ? <p className='text-3xl font-bold'>No orders found</p> :
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
                                <th>TransactionId</th>
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
                </div>}
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