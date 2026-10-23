import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products/cumin-seeds", destination: "/products/cumin", permanent: false },
      {
        source: "/products/dehydrated-vegetable-powders",
        destination: "/products/vegetables",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/Product%20Portfolio.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Sarvanta Global - Product Portfolio.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
