/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';

import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { LOAD_CATEGORY, LOAD_THEMES, LOAD_PROPERTY_VALUE } from './constants';
import {
  categoryloaded,
  categoryFailure,
  loadThemesSuccess,
  loadThemesFailure,
  loadPropertySuccess,
  loadPropertyFailure,
} from './actions';


/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
export function* getCategory() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = 'https://chattermill-challenge.com/api/categories?limit=100';

  try {
    // Call our request helper (see 'utils/request')
    const categories = yield call(request, requestURL);
    yield put(categoryloaded(categories));
  } catch (err) {
    yield put(categoryFailure(err));
  }
}

export function* getThemes() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = 'https://chattermill-challenge.com/api/themes?limit=100';

  try {
    // Call our request helper (see 'utils/request')
    const themes = yield call(request, requestURL);
    yield put(loadThemesSuccess(themes));
  } catch (err) {
    yield put(loadThemesFailure(err));
  }
}

export function* getPropertyValues() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = 'https://chattermill-challenge.com/api/reviews?limit=100';

  try {
    // Call our request helper (see 'utils/request')
    const propertyValue = yield call(request, requestURL);
    yield put(loadPropertySuccess(propertyValue));
  } catch (err) {
    yield put(loadPropertyFailure(err));
  }
}
/*
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_CATEGORY, getCategory);
  yield takeLatest(LOAD_THEMES, getThemes);
  yield takeLatest(LOAD_PROPERTY_VALUE, getPropertyValues);
}
