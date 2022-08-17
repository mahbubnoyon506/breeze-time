import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51L0m3ZDl4aqKhSry404LiN0wWgPfpHi09C4GAdiVJ5UHHN1dDOzSURB54zDkEhDCSWQE6SEbHjddW6IQdSKJwOps00Kq9ZM9WC")
const Payment = () => {
    const [user] = useAuthState(auth);


    const data = {plan:'monthly'};
    return (
        <div className='flex justify-center  items-center my-16'>
            <div className='payment'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">You are almost there!</h2>
                        <div className="mt-5 w-full">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm data={data} />
                            </Elements>
                        </div>
                    </div>
                </div>

            </div>
            <div className='package mx-5'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Monthly Billing</h2>
                        <p>Total Charge $60</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;