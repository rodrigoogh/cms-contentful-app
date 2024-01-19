import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";

import PageDecoupled from "./PageDecoupled";

const meta = {
  title: "Example/Page",
  component: PageDecoupled,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageDecoupled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    allProducts: [
      {
        title: "Product Title",
        image: {
          url: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
        },
        description: "Product Description",
        category: ["Category"],
      },
      {
        title: "Product Title",
        image: {
          url: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
        },
        description: "Product Description",
        category: ["Category"],
      },
      {
        title: "Product Title",
        image: {
          url: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
        },
        description: "Product Description",
        category: ["Category"],
      },
      {
        title: "Product Title",
        image: {
          url: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
        },
        description: "Product Description",
        category: ["Category"],
      },
    ],
  },
};
