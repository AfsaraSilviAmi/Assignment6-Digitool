import React from 'react';

const Tab = ({setToggle, goCart}) => {
    return (
        <div className='text-center md:mt-25'>
            <h1 className='font-extrabold text-[48px] mb-3'>Premium Digital Tools</h1>
            <p className='text-[16px] text-[#627382] mb-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center mb-5'>
                {/* name of each tab group should be unique */}
<div className="tabs tabs-box gap-4 rounded-3xl">
  <input onClick={()=>setToggle("productSec")} type="radio" name="my_tabs_1" className="tab text-[16px] rounded-3xl text-black checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white" aria-label="Products"  defaultChecked />
  <input onClick={()=>setToggle("cart")} type="radio" name="my_tabs_1" className="tab text-[16px] text-black checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white rounded-3xl" aria-label={`Cart(${goCart.length})`}/>
  
</div>
            </div>
        </div>
    );
};

export default Tab;