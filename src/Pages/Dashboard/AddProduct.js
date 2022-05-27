import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const AddProduct = () => {
    const [user, loading,] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [imageUrl, setImageUrl] = useState('');

    if (loading) {
        return <LoadingSpinner />;
    }

    const imageStorageKey = '622c187076394b5238e64af64ad74a44';

    const onSubmit = async data => {
        const productData = {
            userName: user?.displayName,
            email: user?.email,
            name: data?.name,
            parUnitPrice: data?.price,
            minOrder: data?.minOrder,
            available: data?.available,
            description: data?.description,
            image: imageUrl,
            orderQuantity: 1,
        };
        const image = data?.image[0];

        const formData = new FormData();

        formData.set('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        axios.post(url, formData)
            .then(res => {
                const img = res?.data?.data?.url;
                if (img) {
                    setImageUrl(img);
                    axios.post("http://localhost:5000/add-product", productData, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            toast.success('Product Added');
                            reset();
                        });
                }
            }).catch(error => {
                console.log(error);
            });
    };
    return (
        <div className="flex justify-center items-center my-12">
            <div className="card w-full lg:w-3/5 bg-base-100 shadow-xl relative">
                <div className="card-body">
                    <p className='text-2xl font-bold'>Add your product info</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                {/* 1. location input */}
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product name"
                                    className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name.message}</span>}
                                </label>
                            </div>
                            <div>
                                {/* 2. Par unit price input */}
                                <label className="label">
                                    <span className="label-text">Par unit price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Par unit price"
                                    className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                {/* 3. minimum order input */}
                                <label className="label">
                                    <span className="label-text">Minimum order</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your order number"
                                    className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                    {...register("minOrder", {
                                        required: {
                                            value: true,
                                            message: 'Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.minOrder.message}</span>}
                                </label>
                            </div>
                            <div>
                                {/* 4. Available Quantity input */}
                                <label className="label">
                                    <span className="label-text">Available Product</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full md:max-w-sm sm:max-w-full"
                                    {...register("available", {
                                        required: {
                                            value: true,
                                            message: 'Number is Required'
                                        }
                                    })}
                                />
                                <label className="label mt-2">
                                    {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.available.message}</span>}
                                </label>
                            </div>
                        </div>
                        {/* 1. description input */}
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea
                                type="text"
                                rows="6"
                                placeholder="Product Description"
                                className="input input-bordered w-full h-auto"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'A short description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.description.message}</span>}
                            </label>
                        </div>
                        {/* 1. Img input */}
                        <div className='w-full'>
                            <label className="label">
                                <span className="label-text">Product image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Product image"
                                className="input input-bordered w-full h-auto"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full text-white' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;