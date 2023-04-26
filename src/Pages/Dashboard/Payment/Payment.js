import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Payment = () => {
    const booking = useLoaderData();
    console.log('booking data', booking);
    const { treatment, price, appointmentDate, slot } = booking;



    return (
         <div>
            <h2 className="text-3xl">Payment For {treatment}</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            {/* <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div> */}
        </div>
    );
};

export default Payment;