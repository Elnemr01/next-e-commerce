import React from 'react'
import Image from 'next/image'
import './hero_style.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = ({ products }) => {
    return (
        <section className="hero-section min-h-[80vh] bg-[#eee] mt-[30px] flex items-center">
            <div className="container grid-container">
                <div className="hero-content flex flex-col justify-center gap-3">
                    <h1 className="hero-title">Welcome to Our Store</h1>
                    <p className="hero-subtitle">Discover amazing products at unbeatable prices.</p>
                    <Button className='w-fit'>
                        <Link href='/products'>Shop Now</Link>
                    </Button>
                </div>
                <div className="image flex justify-center items-center">
                    <Image src={products.data[0].images[0]} alt="Hero Image" width={400} height={400} />
                </div>
            </div>
        </section>
    )
}

export default Hero