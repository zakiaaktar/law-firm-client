import React from 'react';
import logo from '../../../assets/images/logo.png';
import Company from './Company';



const Companies = () => {

    const companyData = [
        {
            id: 1,
            img: logo
        },
        {
            id: 2,
             img: logo
        },
        {
            id: 3,
            img: logo
        },
        // {
        //     id: 4,
        //     img: logo
        // },
        // {
        //     id: 5,
        //    img: logo
        // },
        // {
        //     id: 6,
        //     img: logo
        // },
    ]


    return (
       
        <div className='mt-20 mb-36 py-20 bg-gray-100'>
            <div className='text-center'>
                <h3 className='text-3xl text-red-700 font-bold'>They Trust Us</h3>
                <h2 className='text-3xl mt-3'>Featured Company</h2>
                <h4 className='text-xl mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quam. Laboriosam voluptate voluptas atque vel.</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 '>
            {
                    companyData.map(company => <Company
                        key={company.id}
                        company={company}
                    
                    ></Company>)
                }
            </div>
        </div>
    );
};

export default Companies;