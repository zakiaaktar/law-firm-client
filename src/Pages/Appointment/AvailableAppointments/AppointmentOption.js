import React from 'react';



const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;



    return (
        <div className="card shadow-xl w-96 mx-auto p-12 rounded-none border-4 rounded-tl-3xl rounded-br-3xl border-pink-500">
            <div className="card-body rounded-lg p-6 text-center h-full   ">
                <h2 className="text-2xl text-red-700 text-center font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn bg-red-700 border-none cursor-pointer text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;