import React from 'react';
import CartCard from './CartCard';

const Cart = ({goCart}) => {
    const totalPrice = goCart.reduce((sum,item)=> sum + item.price, 0)
    return (
        <div className='w-10/12 mx-auto shadow-2xl rounded-2xl p-10'>
            <h1 className='font-bold text-[24px] mb-5'>Your Cart</h1>
            <div className='gap-4 flex flex-col'>
                {goCart.map(item => <CartCard key={item.id} item={item}></CartCard>)}
            </div>
            <div className='flex justify-between'>
                <p>Total:</p>
                <p>{totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;