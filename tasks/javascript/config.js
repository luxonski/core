/*
	JavaScript Config
	----------------------------------- */

	module.exports = function(paths, gulp, plugins) {

		// Return configuration
		return {
			errorDetails: true,

			// Multiple script bundles
			entry: {

				// Vendor libraries
				vendor: [
					'picturefill',
					'jquery',
					'loadJS',
					'loadCSS',
					'onloadCSS',
					'webfont'
				],

				// Main application
				main: './app/public/assets/js/src/partials/app'
			},

			output: {
				path: plugins.path.join(paths.build, 'assets/js'),
				publicPath: '/assets/js/',
				filename: '[name].min.js'
			},

			resolve: {
				fallback: plugins.path.join(paths.assets.js, 'src/partials'),

				alias: {

					// Polyfills
					picturefill: plugins.path.join(paths.modules, 'picturefill/dist/picturefill.js'),

					// Other 3rd party
					jquery: plugins.path.join(paths.modules, 'jquery/dist/jquery.js'),
					webfont: plugins.path.join(paths.modules, 'components-webfontloader/webfont.js'),
					loadJS: plugins.path.join(paths.modules, 'fg-loadjs/loadJS.js'),
					loadCSS: plugins.path.join(paths.modules, 'fg-loadcss/loadCSS.js'),
					onloadCSS: plugins.path.join(paths.modules, 'fg-loadcss/onloadCSS.js')
				}
			}
		};
	};
