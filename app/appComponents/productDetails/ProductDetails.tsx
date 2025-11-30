"use client"
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image'
import React from 'react'
import Stripe from 'stripe'
import { Button } from '@/components/ui/button';

const ProductDetails = ({product}: any) => {

    product=JSON.parse(product);
    const {items ,addItem, removeItem}=useCartStore();
    let isTheProductInCart=items.find(item=>item.id===product.id);
    let quantity=isTheProductInCart ? isTheProductInCart.quantity :0;


    let handleAdd=()=>{
        console.log("added")
        addItem({
            id: product.id,
            name: product.name,
            price: (product.default_price as Stripe.Price)?.unit_amount || 0,
            imageUrl: product.images[0],
            quantity: 1,
        })
    }

    return (
        <div className="container flex gap-10 flex-col md:flex-row">
            <div className="image">
                <Image src={product.images[0]} alt={product.name} width={400} height={400} />
            </div>
            <div className="details">
                <h1 className="name font-bold text-2xl">{product.name}</h1>
                <p className="description my-5 text-gray-600">{product.description}</p>
                <p className="price font-medium text-xl">{(product.default_price as Stripe.Price)?.unit_amount} $</p>
                <div className="btns flex items-center gap-4 mt-4 ">
                    <Button className='bg-white text-black hover:bg-transparent cursor-pointer'
                    onClick={() => removeItem(product.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <span className='text-xl'>{quantity}</span>
                    <Button className='cursor-pointer' onClick={handleAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails