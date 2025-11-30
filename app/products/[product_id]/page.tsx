// "use client";
import ProductDetails from '@/app/appComponents/productDetails/ProductDetails';
import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/stripe';


const Product = async ({params}:{params: {product_id: string}}) => {
    let {product_id}= await params;
    // console.log(product_id);
    let product = await stripe.products.retrieve(product_id, {
        expand: ['default_price']
    });
    
    return (
        <div className="product flex items-center h-screen">
            <ProductDetails product={JSON.stringify(product)}/>
        </div>
    )
}

export default Product