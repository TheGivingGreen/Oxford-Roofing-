const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/Oxford-Roofing-" : undefined,
  assetPrefix: isGitHubPages ? "/Oxford-Roofing-" : undefined,
  trailingSlash: isGitHubPages
};

export default nextConfig;
