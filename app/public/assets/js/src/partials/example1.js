/*
	Example module 1
	------------------------------- */

	define(['jquery', 'example2', 'example3'], function($) {

		'use strict';

		// Test jQuery dependency
		if ($ && window.console)
			console.log('Example 1 has loaded');
	});
