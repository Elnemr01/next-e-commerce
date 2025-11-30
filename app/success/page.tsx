"use client"
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'
import { useEffect } from 'react';

const Success = () => {
    let {clearCart}=useCartStore();
    useEffect(() => {
        clearCart()
    }, [clearCart])
    return (
        <div className='success'>
            <div className="container flex flex-col items-center justify-center h-[90vh]">
                <h1 className="text-3xl font-bold mb-4 text-green-500">Payment Successful!</h1>
                <p className="text-lg">Thank you for your purchase. Your payment has been processed successfully.</p>
                <Button className='bg-green-500 hover:bg-green-500 mt-8'><Link href={'/products'}>continue shopping</Link></Button>
            </div>
        </div>
    )
}

export default Success