import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Products = ({productPromise}) => {
    const allProducts = use(productPromise)
    return (
        <div className='w-10/12 mx-auto grid md:grid-cols-3 gap-3'>
            {
                allProducts.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;