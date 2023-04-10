import React from 'react';
import faq from '../../../assets/images/faq.jpg'



const FAQ = () => {
    return (
        <>
            <div className='text-red-700 font-bold text-4xl text-center font-serif  my-20'>
                <h2>Frequently Asked Questions</h2>
                <p></p>
            </div>
            <section className=''
                style={{
                    background: `url(${faq})`
                }}
            >

                
                <div className="container mx-auto text-gray-800 mb-32 rounded-md shadow-lg">

                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        {/* <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2> */}
                        <div className="flex flex-col text-white font-bold divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer">Why You Choice Our Legal & Lawyer Services</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto veniam iure totam, unde sunt adipisci enim id facere porro laudantium!</p>

                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer">Why You Choice Our Legal & Lawyer Services</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto veniam iure totam, unde sunt adipisci enim id facere porro laudantium!</p>

                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Why You Choice Our Legal & Lawyer Services</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto veniam iure totam, unde sunt adipisci enim id facere porro laudantium!</p>

                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer">Why You Choice Our Legal & Lawyer Services</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto veniam iure totam, unde sunt adipisci enim id facere porro laudantium!</p>

                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer">Why You Choice Our Legal & Lawyer Services</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto veniam iure totam, unde sunt adipisci enim id facere porro laudantium!</p>

                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;