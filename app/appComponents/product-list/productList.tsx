"use client"
import React, { useState }from 'react'
import Card from '../productCard/Card'



const ProductList = ({products}: any) => {
    const [filterValue, setFilterValue] = useState<string>("");

    
    const filteredProducts = products.filter((product: any) =>
        product.name.toLowerCase().includes(filterValue.toLowerCase()))


    return (
        <>
        <input type="text"
        onChange={(e)=> setFilterValue(e.target.value)}
        placeholder='search products...' className='mx-auto block mb-4'/>
        <div className="product-List grid gap-4">
            {filteredProducts.map((product: any) => (
                <Card product={product} key={product.id} />
            ))}
        </div>
        </>
    )
}

export default ProductList