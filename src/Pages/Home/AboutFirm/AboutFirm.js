import React from 'react';
import aboutFirm from '../../../assets/images/aboutFirm.jpg'



const AboutFirm = () => {
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
    );
};

export default AboutFirm;