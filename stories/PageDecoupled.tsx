import "../app/globals.css";
import MoreProducts from "../app/more-products";
import Intro from "../app/intro";
import HeroProduct from "../app/hero-product";

interface ProductInterface {
  title: string;
  image: {
    url: string;
  };
  category: string[];
  description: string;
}

interface PageInterface {
  allProducts: ProductInterface[];
}

export default function Page({ allProducts }: PageInterface) {
  const heroProduct = allProducts[0];
  const moreProducts = allProducts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroProduct && (
        <HeroProduct
          title={heroProduct.title}
          image={heroProduct.image}
          category={heroProduct.category}
          description={heroProduct.description}
        />
      )}
      <MoreProducts moreProducts={moreProducts} />
    </div>
  );
}
