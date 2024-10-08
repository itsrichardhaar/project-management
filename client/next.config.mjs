/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "project-management-s3-images.s3.amazonaws.com",
                port: "",
                pathname: "/**",
            }
        ]
    }
};

export default nextConfig;
