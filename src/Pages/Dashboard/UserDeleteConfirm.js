import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const UserDeleteConfirm = ({ removeAdmin, refetch, setRemoveAdmin }) => {
    const { email } = removeAdmin;
    const handleDelete = () => {
        fetch(`http://localhost:5000/delete-product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`User: ${email} is deleted`);
                    refetch();
                    setRemoveAdmin(null);
                }
                if (data.message === "Forbidden access") {
                    toast.error("Forbidden access");
                    signOut(auth);
                };
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-admin" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {email}!</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-admin" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDeleteConfirm;
