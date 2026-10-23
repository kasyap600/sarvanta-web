import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
