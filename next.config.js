/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'neiugmsjagpqbondjtmd.supabase.co',
            pathname: '**',
          },
        ],
    }
};

module.exports = nextConfig
