import { Button } from '@/components/ui/button'
import { CartItem as CartItemType, useCartStore} from '@/store/cartStore'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const CartItem = ({item}:{item: CartItemType}) => {
    const {addItem, removeItem}=useCartStore();

    return (
        <div className='item flex gap-4'>
            <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
            <div className='details'>
                <h2 className='name'>{item.name}</h2>
                <p className="totalPrice">{item.price * item.quantity}</p>
                <div className="btns flex items-center gap-4 mt-4 ">
                    <Button className='bg-white text-black hover:bg-transparent cursor-pointer border'
                    onClick={() => removeItem(item.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <span className='text-xl'>{item.quantity}</span>
                    <Button className='cursor-pointer bg-white border text-black hover:bg-transparent' onClick={() => addItem(item)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem