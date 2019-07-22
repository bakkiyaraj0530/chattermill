/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_CATEGORY,
  LOAD_CATEGORY_SUCCESS,
  LOAD_CATEGORY_FAILURE,
  LOAD_THEMES,
  LOAD_THEMES_SUCCESS,
  LOAD_THEMES_FAILURE,
  LOAD_PROPERTY_VALUE,
  LOAD_PROPERTY_VALUE_SUCCESS,
  LOAD_PROPERTY_VALUE_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  propertyvalue: '',
  category: '',
  themes: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_CATEGORY:
        draft.username = action.username;
        break;
      case LOAD_CATEGORY_SUCCESS:
        draft.category = action.category;
        break;
      case LOAD_CATEGORY_FAILURE:
        draft.username = action.error;
        break;
      case LOAD_THEMES:
        draft.themes = action.themes;
        break;
      case LOAD_THEMES_SUCCESS:
        draft.themes = action.themes;
        break;
      case LOAD_THEMES_FAILURE:
        draft.username = action.errorthemes;
        break;
      case LOAD_PROPERTY_VALUE:
        draft.propertyvalue = action.propertyvalue;
        break;
      case LOAD_PROPERTY_VALUE_SUCCESS:
        draft.propertyvalue = action.propertyvalue;
        break;
      case LOAD_PROPERTY_VALUE_FAILURE:
        draft.propertyerror = action.propertyerror;
        break;
    }
  });

export default homeReducer;
