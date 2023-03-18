import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
    return (
        <section className='my-16'>
            <p className='text-center text-red-700 font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointments;