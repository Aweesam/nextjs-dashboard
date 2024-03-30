/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 'd15f34w2p8l1cc.cloudfront.net',
			  // Optionally, you can add pathname: '/hearthstone/*' to be more specific

			},
			{
				protocol: 'https',
				hostname: 'art.hearthstonejson.com',
				port: '',

			}
		  ],
		},
};

module.exports = nextConfig;
