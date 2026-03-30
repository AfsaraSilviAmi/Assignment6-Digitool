import React from 'react';
import ProfileImg from '../assets/products/user.png'
import BoxImg from '../assets/products/package.png'
import RocketImg from '../assets/products/rocket.png'

const Step = () => {
    return (
        <div className='bg-base-200 pt-15 mt-15 pb-15'>
           <div className='text-center mb-7'>
             <h1 className='font-extrabold text-[48px]'>Get Started In 3 Steps</h1>
            <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
           </div>
           <div className='md:flex w-10/12 mx-auto gap-6 mt-5'>
            <div className='bg-white relative rounded-2xl p-4'>
                <div className="badge badge-primary absolute right-2 top-2 rounded-full py-2.5 px-1.5 font-bold text-[14px]">01</div>
                <div className='flex flex-col items-center text-center mt-7 space-y-2'>
                    <img className='bg-[#e6dcee] rounded-full p-3' src={ProfileImg} alt="" /> 
                <p className='font-bold text-[24px]'>Create Account</p>
                <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
            </div>
            <div className='bg-white relative rounded-2xl p-4'>
                <div className="badge badge-primary absolute right-2 top-2 rounded-full py-2.5 px-1.5 font-bold text-[14px]">02</div>
                <div className='flex flex-col items-center text-center mt-7 space-y-3'>
                    <img className='bg-[#e6dcee] rounded-full p-3' src={BoxImg} alt="" /> 
                <p className='font-bold text-[24px]'>Choose Products</p>
                <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>

                </div>
            </div>
            <div className='bg-white relative rounded-2xl p-4'>
                <div className="badge badge-primary absolute right-2 top-2 rounded-full py-2.5 px-1.5 font-bold text-[14px]">03</div>
                <div className='flex flex-col items-center text-center mt-7 space-y-3'>
                    <div className='rounded-full bg-[#e6dcee] p-3'>
                        <img src={RocketImg} alt="" /> 
                    </div>
                <p className='font-bold text-[24px]'>Start Creating</p>
                <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>

                </div>
            </div>
            
            
           </div>
        </div>
    );
};

export default Step;