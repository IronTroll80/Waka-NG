import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'xxnkqekirvdjruvpwjjq.supabase.co',
            },
        ],
    },
}

export default nextConfig