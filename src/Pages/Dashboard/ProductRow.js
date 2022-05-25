import React from 'react';
import useAdmin from '../../Hooks/useAdmin';

const ProductRow = ({ index, user, getData }) => {
    const [admin] = useAdmin();
    const { name, image } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={image} alt="" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{!admin ? <button className='btn btn-xs'>Make Admin</button> :
                <button className='btn btn-xs btn-error'>Remove Admin</button>
            }</td>
            <td><label htmlFor="delete-confirm-product" onClick={() => getData(user)} className='btn btn-xs'>Remove User</label></td>
        </tr>
    );
};

export default ProductRow;