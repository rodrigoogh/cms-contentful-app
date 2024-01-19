import MoreProducts from "./more-products";

import { getAllProducts } from "../lib/api";
import Intro from "./intro";
import { draftMode } from "next/headers";
import Pagination from "./pagination";

export default async function Page({ params }: any) {
  const { page = "1" } = params;
  const { isEnabled } = draftMode();
  const { allProducts, total } = await getAllProducts(!isEnabled, page);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      <MoreProducts moreProducts={allProducts} />
      <Pagination currentPage={page} totalPages={total} />
    </div>
  );
}

export const revalidate = false;
