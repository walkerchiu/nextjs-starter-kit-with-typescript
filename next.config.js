/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if your project has ESLint errors.
    // Disabling on production builds if you're running checks on PRs via GitHub Actions or others.
    // Default: false
    ignoreDuringBuilds: false,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "zh-TW"],
    // When localeDetection is set to false Next.js will no longer automatically redirect based on the user's preferred locale
    // and will only provide locale information detected from either the locale based domain or locale path as described above.
    // Default: true
    localeDetection: true,
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
