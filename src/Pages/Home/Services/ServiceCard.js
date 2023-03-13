import React from 'react';


const ServiceCard = ({ service }) => {
    const { _id, title, img, description } = service;


    return (
        

        
         <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-none">
            <figure><img src={img} alt="Sservice-img" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='text-justify'>{description.slice(0, 100)}...</p>
                
                {/* <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-green-500 rounded-full px-6 py-3 border-none mt-2 font-bold">View Details</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceCard;