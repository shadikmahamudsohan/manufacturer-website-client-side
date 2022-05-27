import React from 'react';
import useAdmin from '../../Hooks/useAdmin';

const ProductRow = ({ index, user, getData }) => {
    const { name, image } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt="" />
                </div>
            </div></td>
            <td>{name}</td>

            <td><label htmlFor="delete-confirm-product" onClick={() => getData(user)} className='btn btn-xs btn-error'>Remove Product</label></td>
        </tr>
    );
};

export default ProductRow;