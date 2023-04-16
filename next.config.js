/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "zh-TW"],
    defaultLocale: "en-US",

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.tw",
        defaultLocale: "zh-TW",
        // specify other locales that should be redirected
        // to this domain
        locales: ["zh-TW"],
      },
    ],
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
