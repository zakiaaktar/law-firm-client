import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';




const Testimonial = () => {

    const reviews = [
        {
         _id: 1,
         name: 'Joe Deo',
         img: people1,
         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         location: 'USA'
        },
        {
         _id: 1,
         name: 'Mathen',
         img: people2,
         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         location: 'Canada'
        },
        {
         _id: 1,
         name: 'Joegr',
         img: people3,
         review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
         location: 'Australia'
        },
     ]


    return (
        <section className='my-16'>
          
                <div className='font-bold text-4xl text-center my-16'>
                    <h4 className="text-3xl text-red-700">Testimonial</h4>
                    <h2 className="text-3xl mt-3">What They Says</h2>
                </div>
                
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-16'>
                {
                    reviews?.map(review => <Review
                     key={review._id}
                     review={review}
                    
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;