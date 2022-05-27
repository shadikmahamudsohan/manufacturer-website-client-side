
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import AllOrder from './AllOrder';
import OrderDeleteConfirm from './OrderDeleteConfirm';

const ManageOrders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://quiet-basin-59724.herokuapp.com/get-order', {
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
            <div className='lg:w-3/5 sm:w-full'>
                <h1 className='text-center mb-5 text-primary text-3xl font-bold'>My Admin for this website</h1>
                <div className="overflow-x-auto shadow-2xl rounded-3xl">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Is Pending</th>
                                <th>Ship</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <AllOrder
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
            </div>
            {deletingProduct && <OrderDeleteConfirm
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
                htmlFor="delete-confirm-order"
            />}
        </div>
    );
};

export default ManageOrders;
