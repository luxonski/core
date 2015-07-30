/*
	Example module 3
	------------------------------- */

	define(['jquery'], function($) {

		'use strict';

		// Test jQuery dependency
		if ($ && window.console)
			console.log('Example 3 has loaded');

		// Lazy-load
		require(['example4']);
	});
