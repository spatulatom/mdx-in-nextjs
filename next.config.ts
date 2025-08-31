import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// Configure MDX (add remark/rehype plugins here later as you learn more)
const withMDX = createMDX({
  // Optionally specify an extension regex (default already matches .mdx)
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
