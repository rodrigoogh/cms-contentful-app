import "../app/globals.css";

import type { Meta, StoryObj } from "@storybook/react";

import HeroProduct from "../app/hero-product";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Hero Product",
  component: HeroProduct,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    image: { control: { type: "file", accept: "image" } },
    description: { control: "text" },
    category: {
      control: "inline-check",
      options: ["Self Care", "Skin Health & Beauty", "Essential Health"],
    },
  },
} satisfies Meta<typeof HeroProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Story: Story = {
  args: {
    title: "Product Title",
    image: {
      url: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
    },
    description: "Product Description",
    category: ["Category"],
  },
};
