const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    unoptimized: true,
    domains: [
      'localhost',
      'bharath-kumar-portfolio-kohl.vercel.app',
      'devicon-website.vercel.app', 
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'devicon-website.vercel.app', 
        pathname: '**',
      },
    ],
  },
   webpack(config) {
    // ✅ Ensures SVGs and other formats are handled properly
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  }
}





module.exports = nextConfig;
