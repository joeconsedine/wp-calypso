/** @format */

/**
 * Internal dependencies
 */

import { combineReducers, withoutPersistence } from 'state/utils';
import { MAILCHIMP_SETTINGS_RECEIVE, MAILCHIMP_SETTINGS_UPDATE_SUCCESS } from 'state/action-types';

export const items = withoutPersistence( ( state = {}, action ) => {
	switch ( action.type ) {
		case MAILCHIMP_SETTINGS_RECEIVE: {
			const { siteId, settings } = action;

			return {
				...state,
				[ siteId ]: settings,
			};
		}
		case MAILCHIMP_SETTINGS_UPDATE_SUCCESS: {
			const { siteId, settings } = action;

			return {
				...state,
				[ siteId ]: settings,
			};
		}
	}

	return state;
} );

export default combineReducers( {
	items,
} );
