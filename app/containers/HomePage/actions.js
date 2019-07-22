/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function loadCategory() {
  return {
    type: LOAD_CATEGORY,
  };
}

export function categoryloaded(category) {
  return {
    type: LOAD_CATEGORY_SUCCESS,
    category,
  };
}

export function categoryFailure(error) {
  return {
    type: LOAD_CATEGORY_FAILURE,
    error,
  };
}

export function loadThemes() {
  return {
    type: LOAD_THEMES,
  };
}

export function loadThemesSuccess(themes) {
  return {
    type: LOAD_THEMES_SUCCESS,
    themes,
  };
}

export function loadThemesFailure(errorthemes) {
  return {
    type: LOAD_THEMES_FAILURE,
    errorthemes,
  };
}

export function loadPropertyvalue() {
  return {
    type: LOAD_PROPERTY_VALUE,
  };
}
export function loadPropertySuccess(propertyvalue) {
  return {
    type: LOAD_PROPERTY_VALUE_SUCCESS,
    propertyvalue,
  };
}
export function loadPropertyFailure(propertyerror) {
  return {
    type: LOAD_PROPERTY_VALUE_FAILURE,
    propertyerror,
  };
}
