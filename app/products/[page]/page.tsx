import MoreProducts from "../../more-products";

import { getAllProducts } from "../../../lib/api";
import Intro from "../../intro";
import HeroProduct, { HeroProductProps } from "../../hero-product";
import { draftMode } from "next/headers";
import Pagination from "@/app/pagination";

interface PageInterface {
  allProducts: HeroProductProps[];
  currentPage: number;
  totalPages: number;
}

export default async function Page({ params }: any) {
  const { page } = params;
  const { isEnabled } = draftMode();
  const { allProducts, total } = await getAllProducts(isEnabled, page);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      <MoreProducts moreProducts={allProducts} />
      <Pagination currentPage={page} totalPages={total} />
    </div>
  );
}
