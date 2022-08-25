import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReviewSlider from './ReviewSlider';
import { toast } from 'react-toastify';
import useAdmin from '../../hooks/useAdmin';

const CustomerReview = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(user);

    const handleAdmin = () => {
        toast.error("Admin can't give review");
    }
    const handleReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const imageUrl = event.target.imageUrl.value;
        const rating = parseInt(event.target.rating.value);
        const review = event.target.review.value;
        console.log(rating, name, email, imageUrl, review);

        const customerReviews = { rating, name, email, imageUrl, review }
        axios.post('http://localhost:5000/reviews', customerReviews)
            .then(function (response) {
            })
        console.log(customerReviews)
        toast.success('Review added Successfully ')

        // event.target.name.value = '';
    }


    return (
        <div className='w-full mx-auto bg-white flex font-sans'>
            <div className='text-center w-full mx-auto my-8'>
                <h1 className="text-2xl lg:text-4xl font-bold text-center pt-4 lg:py-8">Customer Review</h1>
                <ReviewSlider />
                {/* review modal */}
                <div>
                    {
                        admin ? (<label onClick={handleAdmin}  className="btn rounded-lg border-none bg-primary text-white hover:bg-accent">Give Review</label>) : 
                        (<label for="my-modal-6" className="btn rounded-lg border-none bg-primary text-white hover:bg-accent modal-button">Give Review</label>)
                    }

                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleReview}>
                                <input type="text" name='name' placeholder="Type your name here" className="input input-bordered input-accent w-full max-w-xs mt-5" value={user?.displayName} />
                                <input type="email" name='email' placeholder="Type your email here" className="input input-bordered input-accent w-full max-w-xs mt-5" value={user?.email} disabled />
                                <input type="url" name='imageUrl' placeholder="Enter your image url here" className="input input-bordered input-accent w-full max-w-xs mt-5" />
                                <select name='rating' className="select input input-bordered input-accent w-full max-w-xs mt-5">
                                    <option disabled selected>Enter your rating</option>
                                    <option value={5}>5</option>
                                    <option value={4}>4</option>
                                    <option value={3}>3</option>
                                    <option value={2}>2</option>
                                    <option value={1}>1</option>
                                </select>
                                <input type="text" name='review' placeholder="Type your review here" className="input input-bordered input-accent w-full max-w-xs mt-5" />
                                <div className="modal-action">
                                    <label for="my-modal-6" className="btn rounded-lg border-none bg-primary text-white hover:bg-accent">


                                        <input type="submit" value={'Submit'} />
                                    </label>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;