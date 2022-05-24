import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, admin } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/add-admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Admin Added`);
                }
            });
    };
    const removeAdmin = () => {
        fetch(`http://localhost:5000/remove-admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <td><button className='btn btn-xs'>Remove User</button></td>
        </tr>
    );
};

export default AdminRow;