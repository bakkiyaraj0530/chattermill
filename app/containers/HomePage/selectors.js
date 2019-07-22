/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const selectcategory = () =>
  createSelector(
    selectHome,
    homeState => homeState.category,
  );

const selectthemes = () =>
  createSelector(
    selectHome,
    homeState => homeState.themes,
  );
const selectpropertyValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.propertyvalue,
  );
// const cate = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.username,
//   );
export {
  selectHome,
  makeSelectUsername,
  selectcategory,
  selectthemes,
  selectpropertyValue,
};
