import Hero from "@/app/appComponents/hero/hero";
import { CarouselDemo } from "@/components/Carousel";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
      expand: ["data.default_price"],
      limit: 5,
  });
  return (
    <div className="home">
      <Hero products={products} />
      <CarouselDemo products={products}/>
    </div>
  );
}
