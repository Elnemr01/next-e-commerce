import { stripe } from '@/lib/stripe'
import React from 'react'
import Card from '../appComponents/productCard/Card';
import Link from 'next/link';
import ProductList from '../appComponents/product-list/productList';

const Products = async () => {
    const products = await stripe.products.list({
        expand: ['data.default_price']
    })
    // console.log(products.data);
    return (
        <div className='products mt-[50px]'>
            <div className="container">
                <h1 className='text-center font-bold text-2xl'>All Products</h1>
                <ProductList products={products.data} />
            </div>
        </div>
    )
}

export default Products