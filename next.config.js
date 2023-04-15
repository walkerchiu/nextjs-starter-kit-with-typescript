/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "zh-TW"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
