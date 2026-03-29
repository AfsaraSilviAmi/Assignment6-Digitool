import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';


const Banner = () => {
    return (
        <div>
            <div className="hero w-11/12 mx-auto bg-base-100 min-h-screen">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <img
      src="/src/assets/banner.png"
      className="max-w-sm rounded-lg shadow-2xl ml-7 w-full"
    />
    <div>
        <div className="badge badge-soft badge-primary font-medium md:text-[16px]"><GoDotFill></GoDotFill><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span></div>
      <h1 className="md:text-[75px] text-3xl font-extrabold">Supercharge Your <br /> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</span></h1>
      <p className="py-2 mb-5 text-[18px] text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />
Explore Products
      </p>
      <button className="btn font-bold text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl mr-2">Explore Products</button>
      <button className="btn rounded-3xl border border-[#9514FA]"><CiPlay1 className='text-[#9514FA] text-[16px]'></CiPlay1> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-[16px]'>Watch Demo</span></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;