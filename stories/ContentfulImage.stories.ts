import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";

import ContentfulImage from "../lib/contentful-image";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Contentful Image",
  component: ContentfulImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
    quality: { control: "number" },
    alt: { control: "text" },
  },
} satisfies Meta<typeof ContentfulImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Story: Story = {
  args: {
    src: "https://www.bandaid.ca/sites/bandaid_ca/files/styles/product_image/public/product-images/3.4_infectiondefense_20bil.jpg",
    width: 500,
    height: 500,
    alt: "Text alt",
    quality: 78,
  },
};
