import React from 'react';
//import about from '../../../assets/images/about.jpg'
import aboutFirm from '../../../assets/images/aboutFirm.jpg'



const About = () => {
    return (
        <div className="my-24">
        <div className="hero">
          <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-red-700 w-1/2">
                O V E R V I E W 
              </h1>
              <h2 className="text-3xl font-serif font-bold mt-10">
                A Little Information About Our LAWFIRM
              </h2>
              <p className="text-gray-600 mt-6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis!
              </p>
              <p className="text-gray-600">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis libero magni natus!
              </p>
              <div className="flex gap-10 mt-6 justify-center lg:justify-start ">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    30<span className="text-red-700">+</span>
                  </h2>
                  <small className="text-gray-600">Worldwide Branch</small>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-center">
                    1000<span className="text-red-700">+</span>
                  </h2>
                  <small className="text-gray-600">Trusted Clients</small>
                </div>
  
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    500<span className="text-red-700 font-extrabold">+</span>
                  </h2>
                  <small className="text-gray-600">Team Members</small>
                </div>
              </div>
            </div>
            <div className="card relative sm:w-1/2 h-full">
              <div className="card-body">
                <img
                  src={aboutFirm}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    //    <div className='text-center'>
    //     <div className='text-red-700 font-bold text-4xl text-center my-16'>
    //         <h2>About Our Service</h2>
    //     </div>
    //      <section className='my-12'
    //         style={{
    //             background: `url(${about})`
    //         }}
    //     >
    //         <div className="hero">
                
    //                 <div className='w-1/2 mx-auto p-20'>
                       
    //                     <h1 className="text-white text-4xl font-bold">About Our Services</h1>
    //                     <p className="text-white py-6">Professional legal services refer to the services provided by licensed lawyers and law firms to individuals, businesses, and other organizations. These services may include legal advice, representation in court or other legal proceedings, contract drafting and review, and other legal support. When seeking legal services, it is important to choose a lawyer or law firm with experience and expertise in the area of law that your legal issue pertains to. It is also important to consider the lawyer's reputation, communication skills, and fee structure.</p>
                        
    //                 </div>
                
    //         </div>

    //     </section>
    //    </div>
    );
};

export default About;