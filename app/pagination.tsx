import { PAGE_DISTANCE, PAGE_SIZE } from "@/lib/constants";
import Link from "next/link";

export interface PaginationInterface {
  totalPages: number;
  currentPage: string;
}

function NumbersForPagination(currentPage: string, totalPages: number) {
  const current = parseInt(currentPage, 10);
  const MAX_PAGES = Math.ceil(totalPages / PAGE_SIZE);
  const numbers = [];
  const regularClass =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const activeClass =
    "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

  for (
    let index = current - PAGE_DISTANCE;
    index <= current + PAGE_DISTANCE;
    index++
  ) {
    const shouldRender = index <= 0 || index > MAX_PAGES ? false : true;
    const pageURL = `/products/${index}`;

    if (shouldRender) {
      numbers.push(
        <li key={`page=${index}`}>
          <Link
            href={pageURL}
            aria-current={current === index ? true : false}
            className={current === index ? activeClass : regularClass}
          >
            {index}
          </Link>
        </li>
      );
    }
  }

  return numbers;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationInterface) {
  const MAX_PAGES = Math.ceil(totalPages / PAGE_SIZE);
  const nextDisabled = parseInt(currentPage, 10) === MAX_PAGES;
  const previousDisabled = parseInt(currentPage, 10) === 1;
  const previousPageURL =
    currentPage === "2" ? "/" : `/products/${parseInt(currentPage, 10) - 1}`;
  const nextPageURL = `/products/${parseInt(currentPage, 10) + 1}`;

  return (
    <section>
      <nav aria-label="Page navigation">
        <ul className="flex justify-center items-center -space-x-px h-8 text-sm my-4">
          <li key={"previous-page"}>
            <Link
              href={previousPageURL}
              aria-disabled={previousDisabled}
              className={`${
                previousDisabled ? "pointer-events-none" : ""
              } flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </Link>
          </li>
          {NumbersForPagination(currentPage, totalPages)}
          <li key={"next-page"}>
            <Link
              href={nextPageURL}
              aria-disabled={nextDisabled}
              className={`${
                nextDisabled ? "pointer-events-none" : ""
              } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
