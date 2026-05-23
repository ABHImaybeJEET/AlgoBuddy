
/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/visualizer/graph/traversal/bfs',
				destination: '/visualizer/graph/bfs',
				permanent: true,
			},
			{
				source: '/visualizer/graph/traversal/dfs',
				destination: '/visualizer/graph/dfs',
				permanent: true,
			},
			{
				source: '/visualizer/graph/algorithms/dijkstra',
				destination: '/visualizer/graph/dijkstra',
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},
};

export default nextConfig;
