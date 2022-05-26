import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ index, user, getData }) => {
    const { _id, productName, image, price, quantity, location } = user;
    const payed = false;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={image} alt="" />
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{location}</td>
            {/* <td>{
                payed ? <p className="text-sm text-success">
                    Payed
                </p> : <label htmlFor="delete-confirm-order" onClick={() => getData(user)} className='btn btn-xs'>Remove User</label>
            }</td> */}
            {
                payed ? <>
                    <td><p className="text-sm text-success">Payed</p></td>
                </> : <>
                    <td> <label htmlFor="delete-confirm-order" onClick={() => getData(user)} className='btn btn-xs btn-error'>Remove Order</label></td>
                    <td><Link to={`/dashboard/payment/${_id}`} className='btn btn-xs btn-success'>Pay</Link></td>
                </>
            }
        </tr>
    );
};

export default Order;