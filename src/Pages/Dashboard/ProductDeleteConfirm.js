import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';

const ProductDeleteConfirm = ({ deletingProduct, refetch, setDeletingDoctor }) => {
    const { name, _id, description } = deletingProduct;
    const handleDelete = () => {
        fetch(`http://localhost:5000/delete-product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product:  is deleted`);
                    refetch();
                    setDeletingDoctor(null);
                }
                if (data.message === "Forbidden access") {
                    toast.error("Forbidden access");
                    signOut(auth);
                };
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                    <p className="py-4">{description.slice(0, 100)} ...</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeleteConfirm;