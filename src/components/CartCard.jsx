import React from 'react';

const CartCard = ({item}) => {
    return (
        <div className='flex justify-between bg-base-200 p-5 rounded-2xl'>
            <div className='flex items-center gap-3'>
                <img src={item.icon} alt="" />
                <div>
                    <p className='font-semibold text-[20px]'>{item.name}</p>
                    <p className='font-medium text-[16px] text-[#627382]'>${item.price}</p>
                </div>
            </div>
            <div>
                <button className='btn btn-error btn-outline'>Remove</button>
            </div>
        </div>
    );
};

export default CartCard;