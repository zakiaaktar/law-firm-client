import React from 'react';



const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;



    return (
        <div className="card shadow-xl w-96 mx-auto py-12 rounded-none hover:bg-gray-100">
            <div className="card-body text-center">
                <h2 className="text-2xl text-red-700 text-center font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;