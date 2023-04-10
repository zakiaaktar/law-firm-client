//import { format } from 'date-fns';
import React from 'react';
//import appointmentBanner from '../../../assets/images/appointmentBanner.jpeg';
import { DayPicker } from 'react-day-picker';
import about from '../../../assets/images/about.jpg'



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    // const [selectedDate, setSelectedDate] = useState(new Date());



    return (

        <header>
            <div className='text-red-700 font-bold text-4xl text-center '>
                <h2>Appointment</h2>
            </div>
            <section className='my-12 py-16'
                style={{
                    background: `url(${about})`
                }}
            >
                <div className="hero">
                    <div className="">
                        {/* <img src={appointmentBanner} alt=""className="max-w-sm rounded-lg shadow-2xl" /> */}
                        <div className='bg-white p-6'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                            {/* <p className='text-red-700 font-bold'>You Have Selected Date: {format(selectedDate, 'PP')}</p> */}
                        </div>
                        
                    </div>
                </div>
            </section>
        </header>
       
    );
};

export default AppointmentBanner;