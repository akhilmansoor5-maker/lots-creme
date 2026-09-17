import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/lots-creme" : "",
  assetPrefix: isGithubPages ? "/lots-creme" : "",
  turbopack: {
    root: projectRoot,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;
