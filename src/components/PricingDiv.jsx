import React from 'react';

const PricingDiv = () => {
    return (
        <div>
            <div className='text-center mt-15'>
                <p className='font-extrabold text-[48px]'>Simple, Transparent Pricing</p>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div>
                <div className='grid md:grid-cols-3 gap-5 w-10/12 mx-auto mt-15 items-stretch'>
                    <div className="card bg-base-100 shadow-md flex flex-col rounded-4xl">
  <div className="card-body flex flex-col h-full">
    <div>
      <h2 className="text-[24px] font-bold bg-base-100">Starter</h2>
      <p className='mb-4 text-[16px] text-[#627382]'>Perfect for getting Started</p>
      <span className="text-[30px] font-bold">$0<span className='font-normal text-[18px] text-[#627382]'>/Month</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>1 project per month</span>
      </li>
     
    </ul>
    <div className="mt-auto">
      <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Get Started Free</button>
    </div>
  </div>
</div> 
{/* Pro Card */}
                    <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md flex flex-col relative rounded-4xl">
  <div className="card-body flex flex-col h-full">
    <div className="badge badge-soft p-3 text-[#BB4D00] badge-warning absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</div>
    <div>
      <h2 className="text-[24px] font-bold">Pro</h2>
      <p className='mb-4 text-[16px]'>Best For Professionals</p>
      <span className="text-[30px] font-bold">$29<span className='font-normal text-[18px]'>/Month</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Unlimited Project</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Advance Analitics</span>
      </li>
     
    </ul>
    <div className="mt-auto">
      <button className="btn bg-white btn-block rounded-3xl"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text text-[16px]'>Start Pro Trial</span></button>
    </div>
  </div>
</div>
                    <div className="card bg-base-100 shadow-md flex flex-col rounded-4xl">
  <div className="card-body flex flex-col h-full">
    <div>
      <h2 className="text-[24px] font-bold bg-base-100">Enterprise</h2>
      <p className='mb-4 text-[16px] text-[#627382]'>For teams and businesses</p>
      <span className="text-[30px] font-bold">$99<span className='font-normal text-[18px] text-[#627382]'>/Month</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px]'>Custom branding</span>
      </li>
     
    </ul>
    <div className="mt-auto">
      <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Contact Sales</button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default PricingDiv;