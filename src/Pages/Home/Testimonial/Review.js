import React from 'react';



const Review = ({ review }) => {
    const { name, img, location, review: userReview  } = review;



    return (
        <div className="card shadow-xl rounded-none">
            <div className="card-body">
                
                <div className="flex items-center justify-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
                <p>{userReview}</p>
            </div>
        </div>
    );
};

export default Review;