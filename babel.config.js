module.exports = ( api ) => {
	// When transpiling Gutenberg sources, always treat them as ESM modules.
	// Helpers that Babel adds imports for will use ESM `import` syntax.
	const sourceType = api.caller( ( caller ) => {
		if ( [ 'WP_BUILD_MAIN', 'WP_BUILD_MODULE' ].includes( caller.name ) ) {
			return 'module';
		}

		// When transpiling `node_modules` dependencies, the modules can be both ESM or CJS.
		// Let Babel parser figure out the type from presence of `import`/`export` statements.
		return 'unambiguous';
	} );

	return {
		sourceType,
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: [ 'babel-plugin-emotion', 'babel-plugin-inline-json-import' ],
	};
};
