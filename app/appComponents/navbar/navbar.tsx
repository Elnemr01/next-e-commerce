"use client"
import Link from 'next/link'
import React from 'react'
import './navbar_style.css'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartStore } from '@/store/cartStore'


const Navbar = () => {

    let {items}=useCartStore();
    let totalnumsOfItems=items.reduce((acc, item) => acc + item.quantity, 0);

    const links=[
        { to: '/', val: 'Home'},
        { to: '/products', val: 'Products'},
        { to: '/checkout', val: 'Checkout'},
    ]
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link href="/">E-Store</Link>
                </div>
                <ul className="links">
                    {
                        links.map((link,i)=> <li key={i}><Link href={link.to}>{link.val}</Link></li>)
                    }
                </ul>
                <div className="mobile-nav flex items-center gap-3 justify-between">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild >
                            <Button variant="outline" className='bars'><FontAwesomeIcon icon={faBars}
                            className='text-2xl'/></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuGroup>
                                {
                                    links.map((l,i)=> <DropdownMenuItem key={i} asChild>
                                        <Link href={l.to} className="w-full cursor-pointer">{l.val}</Link>
                                    </DropdownMenuItem>)
                                }
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="cart relative">
                        <Link href="/checkout">
                            <FontAwesomeIcon icon={faCartShopping} className='text-2xl'/>
                        </Link>
                        {
                            items.length > 0 && <span className="absolute -right-2.5 -top-2.5 
                            rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center">{totalnumsOfItems}</span>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar