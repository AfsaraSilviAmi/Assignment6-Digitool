import React from 'react';

const ProductsCard = ({product, handleCart, goCart}) => {
    const inCart = goCart.filter(cartItem => cartItem.id === product.id).length>0;
    return (
        <div>
            <div className="card md:w-90 bg-base-100 shadow-sm relative rounded-2xl mb-3">
  <div className="card-body">
    <span className={`badge badge-md ${product.badgeColor} badge-soft absolute right-2 rounded-2xl`}>{product.tag}</span>
    <div className='space-y-3 mt-3'>
        <div className='rounded-full shadow-sm p-2 w-12'>
            <img src={product.icon} alt="" />
        </div>
      <h2 className="text-2xl mt-3 font-bold">{product.name}</h2>
      <p className='text-[#627382] text-[16px]'>{product.description}</p>
      <span className="text-xl font-bold">${product.price} <span className='font-normal text-[#627382]'>/{product.period}</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        product.features.map((feature, index)=><li key={index} className='text-[16px] text-[#627382]'><svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg><span>{feature}</span></li>)
      }
    </ul>
    <div className="mt-6">
      <button onClick={()=>handleCart(product)} disabled={inCart} className={`w-full text-[16px] btn ${inCart? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} text-white rounded-3xl`}>{inCart? "Added to Cart" : "Buy Now"}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsCard;