import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import usePackageId from '../../hooks/usePackageId';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51LZctaLkATqQKPdLv8dEKwA9kpuWqSf8UGNRaobrHBS4jwf4tY3uvOk9aSwP39vmp3nXlOk5AHpZ9UsZu7KGgCJB009GvwP5sH")
const Payment = () => {
    const [pack] = usePackageId()

    return (
        <div className='lg:flex justify-center items-center my-16'>
            <div className='payment'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Pay for {pack.name} package.</h2>
                        <div className="mt-5 w-full">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm pack={pack}></CheckoutForm>
                            </Elements>

                        </div>
                    </div>
                </div>
            </div>
            <div className='package mx-5'>
                <div className="card w-96 bg-base-100 shadow-xl p-5">
                    <div className="card-body">
                        <h2 className="card-title">Monthly Billing</h2>
                        <p>Total Charge {pack.price} $</p>
                        <p>Package type {pack.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;