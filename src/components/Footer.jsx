import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center p-5 md:p-20 mt-20'>
               <div className='space-y-3 mb-5'>
                <p className='font-extrabold text-[25px] md:text-[40px]'>Ready to Transform Your Workflow?</p>
               <p className='text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
               </div>
               <div className='md:flex grid gap-2 justify-center mb-4'>
                <button className="btn bg-white rounded-3xl"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text md:text-[16px] font-semibold'>Explore Products</span></button>
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl px-8 md:text-[16px] font-semibold">View Pricing</button>
               </div>
               <p className='text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            <div className='bg-[#101727] pb-10 pt-15'>
                  <footer className="footer text-white sm:footer-horizontal p-10 w-10/12 mx-auto">
  <aside>
    
    <p className='text-4xl font-bold mb-4'>DigiTools</p>
    <p className='text-[16px]'>Premium digital tools for creators, <br />professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
  </aside>
  <nav>
    <h6 className="font-medium text-[20px] mb-2">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="font-medium text-[20px] mb-2">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="font-medium text-[20px] mb-2">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="font-medium text-[20px] mb-2">Social Links</h6>
   <div className='flex gap-3'>
     <div className='bg-white p-2 rounded-full'><RiInstagramFill className='text-black text-[18px]'></RiInstagramFill></div>
    <div className='bg-white p-2 rounded-full'><FaFacebookSquare className='text-black text-[18px]'></FaFacebookSquare></div>
    <div className='bg-white p-2 rounded-full'><FaXTwitter className='text-black text-[18px]'></FaXTwitter></div>
   </div>
  </nav>
</footer>
 <hr className='text-[#fafafadc] w-[78%] mx-auto mb-5'></hr>

  <div className=' w-[78%] mx-auto md:flex justify-between text-[#fafafadc]'>
    <div>
        <p className='md:text-[16px] text-[12px] mb-2'>© 2026 Digitools. All rights reserved.</p>
    </div>
    <div className='flex gap-4 md:text-[16px] text-[12px]'>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
    </div>
  </div>

            </div>
        </div>
    );
};

export default Footer;