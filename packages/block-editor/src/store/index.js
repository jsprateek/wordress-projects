/**
 * WordPress dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import controls from './controls';

/**
 * Module Constants
 */
const STORE_NAME = 'core/block-editor';

/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
export const storeConfig = {
	reducer,
	selectors,
	actions,
	controls,
};

/**
 * Store definition for the block editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
export const store = createReduxStore( STORE_NAME, {
	...storeConfig,
	persist: [ 'preferences' ],
} );

register( store );
