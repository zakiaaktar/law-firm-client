import React from 'react';
import about from '../../../assets/images/about.jpg'



const Contact = () => {
    return (
        <>
            <div className='text-center'>
                <div className='text-red-700 font-bold text-4xl text-center my-16'>
                    <h2>Contact</h2>
                </div>
                <section className='my-12'
                    style={{
                        background: `url(${about})`
                    }}
                >
                    <div className=" d-flex  sm:mt-[100px] my-[100px] mx-auto align-items-center lg:w-[850px] py-12">


                        <div className="block  lg:w-[380px] p-6 rounded-none mx-auto shadow-lg bg-white">

                            <form className=''>
                                <div className="form-group mb-6 pt-12">
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-red-700
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-black-700 focus:outline-none"
                                        id="exampleInput7"
                                        placeholder="Name"
                                    ></input>
                                </div>
                                <div className="form-group mb-6">
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-red-700
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleInput8"
                                        placeholder="Email Address"
                                    ></input>
                                </div>
                                <div className="form-group mb-6">
                                    <textarea
                                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-red-700
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                        id="exampleFormControlTextarea13"
                                        rows="3"
                                        placeholder="Message"
                                        name="message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className='inline-flex items-center justify-center h-12 font-bold tracking-wide text-white transition duration-200 rounded-full px-6 py-3 border-none shadow-md bg-red-700 hover:bg-black focus:shadow-outline focus:outline-none'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;