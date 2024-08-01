/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tailnews.tailwindtemplate.net'],
        remotePatterns: [
            {
              protocol: "http",
              hostname: "localhost",
              port: "8000",
              pathname: "/**",
            },
          ],
    },
    experimental: {
        serverActions: true,
    },
};

export default nextConfig;
