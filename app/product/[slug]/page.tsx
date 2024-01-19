import Link from "next/link";
import { draftMode } from "next/headers";
import MoreProducts from "../../more-products";
import CoverImage from "../../cover-image";

import { getAllProducts, getProductAndMoreProducts } from "@/lib/api";

export async function generateStaticParams() {
  const { allProducts } = await getAllProducts(false, 1);

  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { product, moreProducts } = await getProductAndMoreProducts(
    params.slug,
    isEnabled
  );

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Contentful Challenge
        </Link>
        .
      </h2>
      <article data-sb-object-id={product?.sys?.id}>
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
          data-sb-field-path="title"
        >
          {product?.title}
        </h1>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={product?.title}
            url={product?.image?.url}
            slug={product?.slug}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="prose" data-sb-field-path="description">
            {product?.description}
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreProducts moreProducts={moreProducts} />
    </div>
  );
}
