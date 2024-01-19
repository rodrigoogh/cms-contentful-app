import Link from "next/link";
import CoverImage from "./cover-image";

function ProductPreview({
  slug,
  title,
  image,
  description,
  category,
  id,
}: {
  slug: string;
  title: string;
  image: any;
  description: string;
  category: string[];
  id: string;
}) {
  return (
    <div data-sb-object-id={id}>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={image.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link
              href={`/product/${slug}`}
              className="hover:underline"
              data-sb-field-path="title"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg" data-sb-field-path="category">
            {category.toString()}
          </div>
        </div>
        <div>
          <p
            className="text-lg leading-relaxed mb-4"
            data-sb-field-path="description"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MoreProducts({
  moreProducts,
}: {
  moreProducts: any[];
}) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {moreProducts.map((product) => (
          <ProductPreview
            key={product?.title}
            title={product?.title}
            image={product.image}
            category={product.category}
            description={product?.description}
            slug={product?.slug}
            id={product?.sys?.id}
          />
        ))}
      </div>
    </section>
  );
}
