/*
 * Wazuh app - React component building the configuration component.
 *
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React, { useState, useEffect } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSearchBar,
} from '@elastic/eui';
import { EuiFormErrorText } from '@elastic/eui';
import NavigationService from '../../../../react-services/navigation-service';

export const Header = ({ query, setQuery, searchBarFilters }) => {
  return (
    <EuiFlexGroup gutterSize='none'>
      <EuiFlexItem>
        <EuiFlexGroup gutterSize='none' direction='column'>
          <Title />
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup gutterSize='none' direction='column'>
          <SearchBar
            query={query}
            setQuery={setQuery}
            searchBarFilters={searchBarFilters}
          />
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

const Title = () => {
  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>현재 App 설정</h2>
      </EuiTitle>
    </EuiFlexItem>
  );
};

const SearchBar = ({ query, setQuery, searchBarFilters }) => {
  const [error, setError] = useState();

  useEffect(() => {
    getDefaultCategory(setQuery);
  }, []);

  const onChange = args => {
    if (args.error) {
      setError(args.error);
    } else {
      setError(undefined);
      // TODO: replace URL adding the query to the category query parameter
      setQuery(args);
    }
  };

  return (
    <>
      <EuiSearchBar
        filters={searchBarFilters}
        query={query.query || query}
        onChange={onChange}
        box={{ placeholder: '검색' }}
      />
      {!!error && (
        <EuiFormErrorText>{`${error.name}: ${error.message}`}</EuiFormErrorText>
      )}
    </>
  );
};

const getDefaultCategory = setQuery => {
  const defaultCategory = NavigationService.getInstance()
    .getParams()
    .get('category');
  defaultCategory && setQuery(`category:(${defaultCategory})`);
};
