import React from 'react';
// import logo from '../../../assets/logo.jpeg'
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
          <div>
            <h6 className='font-bold uppercare pt-2'>Solutions</h6>
            <ul>
              <li className='py-1'>Services</li>
              <li className='py-1'>Branding</li>
              <li className='py-1'>Design</li>
              <li className='py-1'>Marketing</li>
              <li className='py-1'>What We Offer</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercare pt-2'>Support</h6>
            <ul>
              <li className='py-1'>Pricing</li>
              <li className='py-1'>Documentation</li>
              <li className='py-1'>Contact</li>
              <li className='py-1'>Refunds</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercare pt-2'>Company</h6>
            <ul>
              <li className='py-1'>About</li>
              <li className='py-1'>Blog</li>
              <li className='py-1'>Jobs</li>
              <li className='py-1'>Press</li>
              <li className='py-1'>Partners</li>
            </ul>
          </div>


          <div>
          <h6 className='font-bold uppercare pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>&copy; Zakia Aktar<br />2023. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>








        
        // <footer className="footer p-16 lg:py-12 lg:pl-32 mx-auto bg-red-700 text-white  grid grid-cols-2 md:grid-cols-4">
           
        //    <div>
        //         <img src={logo} className="h-24  mx-auto w-24 rounded-full" alt="" />
        //         <p>&copy; Zakia Aktar<br />2023</p>
        //         <div className='flex gap-5 mx-auto'>
        //         <button href='https://www.linkedin.com/' target='_blank'><FaLinkedinIn /></button>
        //             <button href='https://www.facebook.com/' target='_blank'><FaFacebook /></button>
                   
                   
        //             <button href='https://github.com/' target='_blank'><FaGithub /></button>
        //             <button href='https://twitter.com/' target='_blank'><FaTwitter /></button>
        //         </div>
        //     </div>
        //     <div className=''>
        //         <span className="footer-title">Services</span>
        //         <Link className="link link-hover">Branding</Link>
        //         <Link className="link link-hover">Design</Link>
        //         <Link className="link link-hover">Marketing</Link>
        //         <Link to='/offer' className="link link-hover">What we offer</Link>
        //     </div>
        //     <div>
        //         <span className="footer-title">Company</span>
        //         <Link to='/about' className="link link-hover">About us</Link>
        //         <Link className="link link-hover">Contact</Link>
        //         <Link className="link link-hover">Jobs</Link>
        //         <Link to='' className="link link-hover">Quests</Link>
        //     </div>
        //     <div>
        //         <span className="footer-title">Legal</span>
        //         <Link className="link link-hover">Terms of use</Link>
        //         <Link className="link link-hover">Privacy policy</Link>
        //         <Link className="link link-hover">Cookie policy</Link>
        //     </div>
           
        // </footer>
    );
};

export default Footer;