import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const UserReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(user)
    return (
        <div className='flex justify-center items-center'>
            <div class="container min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-full">
                        <div>
                            <h2>Hello,<span className='text-accent'> {user && user.displayName}</span></h2>
                            <h1 class="text-5xl font-bold">Please Rate your experience...</h1>
                            <p class="py-6">Your feedback will help us to improve our website experience...</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div {...register("ratings")} class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                                <input type={'submit'} value='Submit' class="btn bg-secondary text-white text-lg outline-none border-none hover:bg-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;