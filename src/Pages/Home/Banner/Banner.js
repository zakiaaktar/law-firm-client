import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className='my-6 mx-12'>
                <div className='relative flex flex-col-reverse py-0 lg:pt-0 lg:flex-col lg:pb-0 '>
                    <div className='inset-y-0 top-0 right-0 z-0 w-full max-w-2xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
                        <svg className='absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block' viewBox='0 0 100 100' fill='currentColor' preserveAspectRatio='none slice'>
                            <path d='M50 0H100L50 100H0L50 0Z' />
                        </svg>
                        <img className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full' src='https://i.ibb.co/L5bf3YT/male-lawyer-or-judge-working-with-law-books-1.jpg' alt='' />
                    </div>
                    <div className='relative flex flex-col items-start w-full max-w-2xl md:px-0 lg:px-8 lg:max-w-screen-xl '>
                        <div className='mb-16 lg:my-32 lg:max-w-lg lg:pr-5'>
                            <h2 className='text-2xl font-bold mb-5'>We Do Much More!!!</h2>
                            <h2 className='text-3xl font-bold text-red-700 mb-6'>Professional Legal & Lawyer Services...</h2>
                            <p className='pr-5 mb-5 text-base text-gray-500 '>
                                Professional legal services refer to the services provided by licensed lawyers and law firms to individuals, businesses, and other organizations. These services may include legal advice, representation in court or other legal proceedings, contract drafting and review, and other legal support.
                            </p>
                            <div className='flex flex-col md:flex-row text-center items-start justify-start'>
                                <Link
                                    to='/'
                                    className='inline-flex items-center justify-center h-12 font-bold tracking-wide text-white transition duration-200 rounded-full px-6 py-3 border-none shadow-md bg-red-700 hover:bg-black focus:shadow-outline focus:outline-none'>
                                    Our Services...
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;