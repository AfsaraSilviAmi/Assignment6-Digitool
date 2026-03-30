import React from 'react';
import CartCard from './CartCard';
import CartImg from '../assets/products/shopping-cart.png'

const Cart = ({goCart, handleDelete, handleCheckOut}) => {
    const totalPrice = goCart.reduce((sum,item)=> sum + item.price, 0)
    return (
        <div className='w-10/12 mx-auto shadow-2xl rounded-2xl p-10'>
            <h1 className='font-bold text-[24px] mb-5'>Your Cart</h1>
            {
                goCart.length === 0? (<div className='flex justify-center'>
                    <div className='flex flex-col'>
                        <img src={CartImg} alt="" />
                    <p className='font-semibold text-center text-2xl mt-4'>Your Cart is empty</p>
                    </div>
                </div>):(<div>
                    <div className='gap-4 flex flex-col'>
                {goCart.map(item => <CartCard key={item.id} item={item} handleDelete={handleDelete}></CartCard>)}
            </div>
            <div className='flex justify-between'>
                <p className='text-[16px] text-[#627382]'>Total:</p>
                <p className='font-bold text-[24px]'>${totalPrice}</p>
            </div>
            <div>
                <button onClick={handleCheckOut} className='btn w-full rounded-2xl mt-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button>
            </div>
            </div>)
            }
            
        </div>
    );
};

export default Cart;