module.exports = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
					'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
				);
			}

			config.module.rules.push({
				test: /\.(html|htm)$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							limit: 1024,
							minimize: !options.dev
						}
					}
				]
			});

			if (typeof nextConfig.webpack === 'function') {
				return nextConfig.webpack(config, options);
			}

			return config;
		}
	});
};