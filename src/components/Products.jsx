import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({productPromise, goCart, handleCart}) => {
    const allProducts = use(productPromise)
    return (
        <div className='w-10/12 mx-auto grid md:grid-cols-3 gap-3'>
            {
                allProducts.map(product => <ProductsCard key={product.id} product={product} goCart={goCart} handleCart={handleCart}></ProductsCard>)
            }
        </div>
    );
};

export default Products;