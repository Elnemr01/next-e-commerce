import Image from 'next/image'
import React from 'react'
import { Stripe } from 'stripe'
import './style.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CardProps {
    product : Stripe.Product
}

const Card = ({product}: any) => {
    return (
        <div className='card p-3 border rounded shadow-sm'>
            <div className="image">
                <Image src={product.images[0]} alt={product.name} width={400} height={400} />
            </div>
            <h2 className="name font-bold text-lg mt-2">
                {product.name}</h2>
            {/* <p className="description text-sm my-5 text-gray-600">
                {product.description}</p> */}
            <p className="price font-medium">
                {product.default_price?.unit_amount} $</p>
            <Button className='my-2 w-full'>
                <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
        </div>
    )
}

export default Card