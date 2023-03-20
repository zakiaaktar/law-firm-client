import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCards/InfoCard';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <InfoCard></InfoCard>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;