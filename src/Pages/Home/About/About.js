import React from 'react';
import about from '../../../assets/images/about.jpg'



const About = () => {
    return (
       <div>
        <div className='text-red-700 font-bold text-4xl text-center my-16'>
            <h2>About Our Service</h2>
        </div>
         <section className='my-12'
            style={{
                background: `url(${about})`
            }}
        >
            <div className="hero">
                
                    <div className='w-1/2 mx-auto p-20'>
                        {/* <h4 className='text-lg text-primary fond-bold'>Appoinment</h4> */}
                        <h1 className="text-white text-4xl font-bold">About Our Services</h1>
                        <p className="text-white py-6">Professional legal services refer to the services provided by licensed lawyers and law firms to individuals, businesses, and other organizations. These services may include legal advice, representation in court or other legal proceedings, contract drafting and review, and other legal support. When seeking legal services, it is important to choose a lawyer or law firm with experience and expertise in the area of law that your legal issue pertains to. It is also important to consider the lawyer's reputation, communication skills, and fee structure.</p>
                        
                    </div>
                
            </div>

        </section>
       </div>
    );
};

export default About;