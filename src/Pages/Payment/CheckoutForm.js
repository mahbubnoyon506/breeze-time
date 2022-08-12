import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const CheckoutForm = ({ data }) => {
    const [user] = useAuthState(auth)
    const { plan } = data;
    const price = '10'
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        fetch(
            "",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    //   authorization: Bearer ${localStorage.getItem("accessToken")},
                },
                body: JSON.stringify({ price }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email,
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats");
        }

        // const payment = {
        //   data: _id,
        //   transactionId: paymentIntent.id,
        // };
        //     fetch(`https://sleepy-wildwood-25871.herokuapp.com/order/${_id}`, {
        //       method: "PATCH",
        //       headers: {
        //         "content-type": "application/json",
        //         // authorization: Bearer ${localStorage.getItem("accessToken")},
        //       },
        //       body: JSON.stringify(payment),
        //     })
        //       .then((res) => res.json())
        //       .then((data) => {
        //         setProcessing(false);
        //         console.log(data);
        //       });
    };

    return (

        

            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <button
                        className="btn btn-success btn-sm mt-4"
                        type="submit"
                        disabled={!stripe}
                    >
                        Pay
                    </button>
                </form>
                {cardError && <p className="text-red-500">{cardError}</p>}
                {success && <p className="text-green-500">{success}</p>}
                {transactionId && <p>Your {transactionId}</p>}
            </>
        
    );
};

export default CheckoutForm;