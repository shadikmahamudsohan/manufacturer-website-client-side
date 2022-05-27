import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import AdminRow from './AdminRow';
import UserDeleteConfirm from './UserDeleteConfirm';

const MakeAdmin = () => {
    const [removeAdmin, setRemoveAdmin] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://quiet-basin-59724.herokuapp.com/all-user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    let navigate = useNavigate();
    if (users?.message === 'Forbidden access') {
        navigate('/');
        signOut(auth);
        toast.error('JWT expired or not found');
        return;
    }

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
                                <th>Name</th>
                                <th>Make Admin</th>
                                <th>Remove User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <AdminRow key={user._id} user={user} index={index} refetch={refetch} setRemoveAdmin={setRemoveAdmin} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {removeAdmin && <UserDeleteConfirm
                removeAdmin={removeAdmin}
                refetch={refetch}
                setRemoveAdmin={setRemoveAdmin}
            />}
        </div>
    );
};

export default MakeAdmin;