require.config({
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'ace': {
			exports: 'ace'
		},
		'split': {
			exports: 'split'
		}
	},
	paths: {
		/*Aliases for Libs*/
		'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min',
		'jquery': '../../bower_components/jquery/dist/jquery.min',
		'split': '../../bower_components/Split.js/split.min',
		'ace': '../../bower_components/ace-builds/src-noconflict/ace',

		/*Aliases for Custom Scripts*/
	}
});

// This code might be called before the require.config() in main.js
// has executed. When that happens, require.js will attempt to
// load 'scripts/foo.js' instead of 'scripts/libs/foo-1.1.3.js'
require(['index']);