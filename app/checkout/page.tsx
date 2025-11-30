"use client"
import { useCartStore } from "@/store/cartStore"
import React from "react"
import CartItem from "../appComponents/cartItem/CartItem";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkoutAction";

const Checkout = () => {
    let {items,clearCart}=useCartStore();
    let totalPrice=items.reduce((acc, e)=> acc +( e.price) * e.quantity , 0)


    if(totalPrice===0 || items.length===0){
        return ( 
            <div className="">
                <div className="container flex flex-col items-center justify-center h-[90vh] text-center">
                    <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                    <p className="text-lg">Please add some items to your cart before proceeding to checkout.</p>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-2xl font-bold capitalize my-4">order summary</h1>
                <div className="items border-b pb-4 flex flex-col gap-4">
                    {
                        items.map((item)=><CartItem key={item.id} item={item} />)
                    }
                </div>
                <div className="total text-2xl font-semibold my-8 flex justify-between items-center">
                    <span>Total: {totalPrice} $</span>
                    <form action={checkoutAction}>
                        <input type="hidden" name="items" value={JSON.stringify(items)} />
                        <Button type="submit" className="capitalize cursor-pointer">proceed to payment</Button>
                    </form>
                </div>
                <Button className="my-8 capitalize" onClick={()=> clearCart()}>clear cart</Button>
            </div>
        </div>
    )
}

export default Checkout