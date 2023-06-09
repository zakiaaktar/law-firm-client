import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectedDate, setTreatment, treatment, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;



        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        // console.log(booking);
        // setTreatment(null);

        fetch('https://law-firm-server-three.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }




    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <select name="slot" className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Contact number" className="input w-full input-bordered" />

                        <br />
                        <input className='w-full btn bg-red-700 border-none cursor-pointer text-white font-bold' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;