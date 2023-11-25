/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'altabarak.pockethost.io',
                port: '',
                pathname: '/api/files/**'
            }
        ]
    },
}

