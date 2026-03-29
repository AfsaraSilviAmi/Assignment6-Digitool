import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white md:py-5'>
           <div className='mx-10 md:flex justify-around'>
            <div>
            <h1 className='font-extrabold text-[50px] md:text-[60px] text-center'>50K+</h1>
            <p className='text-[24px] text-center'>Active Users</p>
            </div> 
             <div className="divider md:divider-horizontal h-15 self-center before:bg-gray-300 after:bg-gray-300"></div>
           <div> 
            <h1 className='font-extrabold text-[50px] md:text-[60px] text-center'>200+</h1>
            <p className='text-[24px] text-center'>Premium Tools</p>
            </div> 
             <div className="divider md:divider-horizontal h-15 self-center before:bg-gray-300 after:bg-gray-300"></div>
           <div>
            <h1 className='font-extrabold text-[50px] md:text-[60px] text-center'>4.9</h1>
            <p className='text-[24px] text-center'>Rating</p>
            </div> 
           </div>
            
        
        </div>
    );
};

export default Stats;