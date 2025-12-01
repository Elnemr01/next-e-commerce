import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDemo({products}: any) {
    return (
        <div className="slinding">
            <div className="container grid-container my-[50px]">
                <div className="text flex flex-col justify-center mb-8 text-center md:text-start ">
                    <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                    <p className="text-gray-600">Explore our exclusive collection of featured products curated just for you.</p>
                </div>
                <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="h-full">
                            <Image src={products.data[index].images[0]} alt={`Product image ${index + 1}`} width={300} height={300}/>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
