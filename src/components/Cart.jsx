import React from 'react';
import CartCard from './CartCard';

const Cart = ({goCart}) => {
    return (
        <div>
            {goCart.map(item => <CartCard key={item.id} item={item}></CartCard>)}
        </div>
    );
};

export default Cart;