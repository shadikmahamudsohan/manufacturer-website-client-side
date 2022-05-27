import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch, setRemoveAdmin }) => {
    const { email, admin } = user;

    const makeAdmin = () => {
        fetch(`https://quiet-basin-59724.herokuapp.com/add-admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin Added`);
                }
            });
    };
    const removeAdmin = () => {
        fetch(`https://quiet-basin-59724.herokuapp.com/remove-admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin removed`);
                }
            });
    };


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{!admin ? <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button> :
                <button onClick={removeAdmin} className='btn btn-xs btn-error'>Remove Admin</button>
            }</td>
            <td><label htmlFor='delete-confirm-admin' onClick={() => setRemoveAdmin(user)} className='btn btn-xs'>Remove User</label></td>
        </tr>
    );
};

export default AdminRow;