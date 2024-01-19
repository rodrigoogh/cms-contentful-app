import { PAGE_SIZE } from "./constants";
const POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  image {
    url
  }
  category
  description
  slug
  __typename
`;

interface AllProductsResponseInterface {
  allProducts: any[];
  total: number;
}

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["product"] },
    }
  ).then((response) => response.json());
}

function extractProduct(fetchResponse: any): any {
  return fetchResponse?.data?.productCollection?.items?.[0];
}

function extractProductEntries(
  fetchResponse: any
): AllProductsResponseInterface {
  const { items = [], total = 0 } = fetchResponse?.data?.productCollection;
  return {
    allProducts: items,
    total,
  };
}

export async function getPreviewProductBySlug(
  slug: string | null
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractProduct(entry);
}

export async function getAllProducts(
  isDraftMode: boolean,
  page: number
): Promise<AllProductsResponseInterface> {
  const multiplier = page === 1 ? 0 : page - 1;
  const skip = multiplier > 0 ? PAGE_SIZE * multiplier : 0;
  const entries = await fetchGraphQL(
    `query {
      productCollection(preview: ${
        isDraftMode ? "true" : "false"
      }, limit: ${PAGE_SIZE}, skip: ${skip}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
        total
      }
    }`,
    isDraftMode
  );
  return extractProductEntries(entries);
}

export async function getProductAndMoreProducts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      productCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      productCollection(where: { slug_not_in: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 4) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const { allProducts: moreProducts } = extractProductEntries(entries);
  return {
    product: extractProduct(entry),
    moreProducts,
  };
}
