import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ index, user, getData }) => {
    const { _id, productName, image, price, quantity, location, paid, transactionId } = user;
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

            <td> <label htmlFor="delete-confirm-order" onClick={() => getData(user)} className={`btn btn-xs btn-error ${paid && "btn-disabled"}`}>Remove Order</label></td>
            {
                paid ? <>
                    <td><p className="text-sm text-success">Paid</p></td>
                    <td><p className="text-sm text-success">{transactionId}</p></td>
                </> : <>
                    <td><p className="text-sm text-neutral">UnPaid</p></td>
                    <td><Link to={`/dashboard/payment/${_id}`} className='btn btn-xs btn-success'>Pay</Link></td>
                </>
            }
        </tr>
    );
};

export default Order;