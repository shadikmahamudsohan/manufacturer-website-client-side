import { data } from 'autoprefixer';
import axios from 'axios';
import { error } from 'daisyui/src/colors';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase/firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2, reset: reset2 } = useForm();
    // const [product, setProduct] = useState();
    const [disabled, setDisabled] = useState(false);
    const [quantityError, setQuantityError] = useState("");
    const { id } = useParams();
    // useEffect(() => {
    //     fetch(, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setProduct(data);
    //             if (data.message === "Forbidden access") {
    //                 toast.error("Forbidden access");
    //                 signOut(auth);
    //             };
    //         });
    // }, [id]);
    const url = `http://localhost:5000/get-single-product/${id}`;
    const { data: product, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading) {
        return <LoadingSpinner />;
    }

    const onSubmit = async data => {
        const info = {
            name: user?.displayName,
            email: user?.email,
            productName: product?.name,
            image: product?.image,
            location: data?.location,
            phone: data?.phone
        };
        const res = await axios.put(`http://localhost:5000/update-order/${user?.email}`, (info), {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (res) {
            toast.success('Order Added');
            reset();
        }


    };
    const updateQuantity = async data => {
        const quantity = parseInt(data?.quantity);
        const minQuantity = parseInt(product?.minOrder);
        const maxQuantity = parseInt(product?.available);
        const price = quantity * product?.parUnitPrice;
        if (quantity > minQuantity && quantity < maxQuantity) {
            const input = {
                quantity: data?.quantity,
                price: price,
            };
            const res = await axios.put(`http://localhost:5000/update-order/${user?.email}`, (input), {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (res) {
                toast.success('Quantity Added');
                reset2();
            }
            console.log(res);
        } else if (quantity < minQuantity && quantity < maxQuantity) {
            setQuantityError(`Min Quantity ${minQuantity}`);
            setDisabled(true);
        }
        else if (quantity > minQuantity && quantity > maxQuantity) {
            setQuantityError(`Max Quantity ${maxQuantity}`);
            setDisabled(true);
        }
    };


    const handleError = e => {
        setQuantityError('');
        setDisabled(false);
    };
    return (
        <div className='bg-gradient-to-l from-base-100 to-accent'>
            <div className=' hero relative lg:h-screen md:h-auto'>
                <div className='hero-content flex-col lg:flex-row'>
                    <div className='shrink-0'>
                        <img data-aos='zoom-in'
                            data-aos-delay='1000'
                            data-aos-duration='850'
                            src="https://i.ibb.co/Zm7X48b/drill-PNG23.png"
                            className='h-full max-w-lg' alt='' />
                    </div>
                    <div data-aos='fade-left'
                        data-aos-duration='900'
                        data-aos-delay='300'
                        className='p-5'>
                        <div>
                            <h1 className='text-3xl font-bold mb-2'><strong className='capitaliz'>Name:</strong> {product?.name}</h1>
                            <h1 className='text-xl mb-2'><strong className='capitaliz'>parUnitPrice:</strong> {product?.parUnitPrice}</h1>
                            <h1 className='text-xl mb-2'><strong className='capitaliz'>minOrder:</strong> {product?.minOrder}</h1>
                            <h1 className='text-xl mb-2'><strong className='capitaliz'>available:</strong> {product?.available}</h1>
                            <h1 className='text-md mb-2'><strong className='capitaliz'>description:</strong> {product?.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mb-12'>
                <h1 className='text-3xl font-bold text-center'>Add your Information</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 w-full my-5">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            disabled
                                            placeholder={user?.displayName}
                                            className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input
                                            type="text"
                                            disabled
                                            placeholder={user?.email}
                                            className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Your location</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Location"
                                            className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                            {...register("location", {
                                                required: {
                                                    value: true,
                                                    message: 'Location is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.location.message}</span>}
                                        </label>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Product Quantity"
                                            className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone number is Required',
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <input className='btn w-full text-white' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div className="card  w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit2(updateQuantity)}>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Product Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Product Quantity"
                                        className="input input-bordered w-full"
                                        onFocus={handleError}
                                        {...register2("quantity", {
                                            // min: product?.minOrder,
                                            // max: product?.available,
                                            required: {
                                                value: true,
                                                message: 'Quantity is Required',
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors2.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors2?.quantity.message}</span>}
                                        {quantityError && <span className="label-text-alt text-red-500">{quantityError}</span>}
                                    </label>
                                </div>
                                <div>
                                    <input disabled={disabled} className='btn w-full lg:w-3/12  text-white' type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;