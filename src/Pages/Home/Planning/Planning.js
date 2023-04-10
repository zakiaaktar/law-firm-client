import React from 'react';

const Planning = () => {
    return (
        <section className="mt-20  bg-gray-100">
            <div className="container flex flex-col items-center justify-center mx-auto sm:p-10 my-12">
                <h2 className="text-4xl font-serif font-bold text-red-700 mb-12">Services Planning Area</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 group">
                    <div className="bg-gradient-to-r from-red-700 hover:from-pink-500 hover:to-red-500 to-pink-500 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border h-full">
                            <h3 className="text-lg font-semibold mb-2">
                            LAWYER CONSULTING
                            </h3>
                            <p className="text-gray-600">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod culpa doloribus beatae quaerat autem aperiam labore tempore neque maxime.
                            </p>
                        </div>
                    </div>
                   
                    <div className="bg-gradient-to-r from-red-700 hover:from-pink-500 hover:to-red-500 to-pink-500 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg font-semibold mb-2">
                            ONLINE CONSULTING
                            </h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas odio dolorem eveniet quod omnis in laboriosam sequi veniam commodi.
                            </p>
                        </div>
                    </div>
                  
                    <div className="bg-gradient-to-r from-red-700 hover:from-pink-500 hover:to-red-500 to-pink-500 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg font-semibold mb-2">BUSINESS CONSULTING</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa, aut deserunt sint et dignissimos ducimus quasi repellendus magnam repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
   
};

export default Planning;