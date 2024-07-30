/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tailnews.tailwindtemplate.net'],
    },
    experimental: {
        serverActions: true,
    },
};

export default nextConfig;
