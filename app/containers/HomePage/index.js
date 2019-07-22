/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Select from 'react-select';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
import Form from './Form';
// import Input from './Input';
import Section from './Section';
// import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, loadCategory } from './actions';
import {
  makeSelectUsername,
  selectcategory,
  selectthemes,
  selectpropertyValue,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// let _ = require('lodash');

const key = 'home';

export function HomePage({
  // username,
  loading,
  error,
  repos,
  onSubmitForm,
  categoryList,
  categoryData,
  propertyValue,
  themesData,
  // onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
    categoryList();
  }, []);

  console.log(categoryData, '---categoryData');
  console.log(propertyValue, '----propertyValue');
  console.log(themesData, '----themesData');

  const options =
    categoryData &&
    categoryData.data &&
    categoryData.data.map(item => {
      const ob = { value: item.id, label: item.name };
      return ob;
    });

  // const groupBys = (xs, key) => {
  //   return xs.reduce(function (rv, x) {
  //     (rv[x[key]] = rv[x[key]] || []).push(x);
  //     return rv;
  //   }, {});
  // };
  // const groubedByTeam = groupBys(themesData, 'category_id');
  // console.log(groubedByTeam);

  // const options = [
  //   { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  //   { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  //   { value: 'purple', label: 'Purple', color: '#5243AA' },
  //   { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  //   { value: 'orange', label: 'Orange', color: '#FF8B00' },
  //   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  //   { value: 'green', label: 'Green', color: '#36B37E' },
  //   { value: 'forest', label: 'Forest', color: '#00875A' },
  //   { value: 'slate', label: 'Slate', color: '#253858' },
  //   { value: 'silver', label: 'Silver', color: '#666666' },
  // ];

  const reposListProps = {
    loading,
    error,
    repos,
  };
  const handleChangeTheme = themeOption => {
    setthemeOptions(themeOption);
    // console.log(`Option selected:`, themeOption);
  };
  const handleChangeCateg = categoryOption => {
    setcategOptions(categoryOption);
    // console.log(`Option qqqqqqqqq:`, categoryOption);
  };
  const handleChangeProperty = propertyOption => {
    setpropertyOptions(propertyOption);
    // console.log(`Option sssss:`, propertyOption);
  };
  const [themeOption, setthemeOptions] = useState(null);
  const [categoryOption, setcategOptions] = useState(null);
  const [propertyOption, setpropertyOptions] = useState(null);

  return (
    <article>
      <Helmet>
        <title>DashBoard </title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <Form onSubmit={onSubmitForm}>
            {/* <label htmlFor="username"> */}
            <H2> Filter Panel </H2>
            <label htmlFor="Category"> Category</label>
            <Select
              name="category"
              value={categoryOption}
              onChange={handleChangeCateg}
              options={options}
            />
            <label htmlFor="Panel"> Theme</label>
            <Select
              name="theme"
              value={themeOption}
              onChange={handleChangeTheme}
              options={options}
            />
            <label htmlFor="property">Property Value</label>
            <Select
              name="property"
              value={propertyOption}
              onChange={handleChangeProperty}
              options={options}
            />
            {/* </label> */}
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  categoryList: PropTypes.func,
  categoryData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  themesData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  propertyValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  categoryData: selectcategory(),
  themesData: selectthemes(),
  propertyValue: selectpropertyValue(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    categoryList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadCategory());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
