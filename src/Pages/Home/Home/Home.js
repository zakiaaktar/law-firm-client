import React from 'react';
import Footer from '../../Shared/Footer/Footer';
//import AboutFirm from '../AboutFirm/AboutFirm';
 import About from '../About/About';
import Banner from '../Banner/Banner';
import ChoiceLine from '../ChoiceLine/ChoiceLine';
import Companies from '../Companies/Companies';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import InfoCard from '../InfoCards/InfoCard';
import Planning from '../Planning/Planning';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Planning></Planning>
            <About></About>
            {/* <AboutFirm></AboutFirm> */}
            <Services></Services>
            <InfoCard></InfoCard>
            <ChoiceLine></ChoiceLine>
            <Testimonial></Testimonial>
            
            <FAQ></FAQ>
            <Companies></Companies>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;