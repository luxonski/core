/*
	JavaScript bundling
	----------------------------------- */

	module.exports = function(paths, gulp, plugins) {

		// Child modules
		var webpack = require('webpack'),
			gulpWebpack = require('webpack-stream');

		return function() {

			// Output stats
			function outputStats(err, stats) {

				// Throw any errors
				if (err) {
					throw new plugins.util.PluginError('webpack', err);
				}

				// Log output
				plugins.util.log('[webpack]', stats.toString({
					colors: true,
					errorDetails: true
				}));
			}

			// Get base JavaScript config
			var settings = plugins.getModule('javascript/config');

			// Add output plugins
			settings.plugins = [

				// Don't bundle vendor dependencies in other chunks
				new webpack.optimize.CommonsChunkPlugin({
					name: 'vendor'
				}),

				// Minify output
				new webpack.optimize.UglifyJsPlugin({
					output: { comments: false },
					sourceMap: true
				})
			];

			return gulp.src('src/main.js')
				.pipe(gulpWebpack(settings, webpack, outputStats))
				.pipe(gulp.dest(plugins.path.join(paths.build, 'assets/js')))
		}
	};
