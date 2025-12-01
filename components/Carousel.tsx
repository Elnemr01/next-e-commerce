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
        <Carousel className="w-full max-w-xs mx-auto my-[50px]">
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
    )
}
