import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllOrder = ({ index, user, getData }) => {
    const [approved, setApprove] = useState(false);
    const { _id, image, productName, paid, status } = user;
    useEffect(() => {
        if (status) {
            setApprove(status);
        }
    }, [status]);
    const handleShipped = async () => {
        const res = await axios.put(`https://quiet-basin-59724.herokuapp.com/update-order/${_id}`, ({ status: "approved" }), {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (res) {
            toast.success('approved');
            setApprove(true);
        }
    };


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={image} alt="" />
                </div>
            </div></td>
            <td>{productName}</td>
            {
                paid ? <>
                    {approved ? <td><p className='text-success'>approved</p></td> : <td>
                        <p className='text-error'>pending</p></td>}
                    {approved ? <td><button onClick={handleShipped} className='btn btn-xs btn-success btn-disabled'>shipped</button></td> :
                        <td><button onClick={handleShipped} className='btn btn-xs btn-success'>shipped</button></td>
                    }

                </> : <>
                    <td><label htmlFor="delete-confirm-order" onClick={() => getData(user)} className='btn btn-xs btn-error' >Cancel</label></td>
                    <td><button className='btn btn-xs btn-error btn-disabled'>shipped</button></td>
                </>
            }
        </tr>
    );
};

export default AllOrder;