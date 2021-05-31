import PropTypes from 'prop-types';
import React, { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { FILTER_DELAY } from '@constants/common';

const Panel = styled.div`
  width: 100%;
  display: flex;
`;

function UsersFilter({ onSubmit }) {
  const refTimeout = useRef(0);

  const usernameChanged = useCallback(({ target }) => {
    const { value } = target;

    clearTimeout(refTimeout.current);
    refTimeout.current = setTimeout(() => onSubmit({ username: value }), FILTER_DELAY);
  }, [onSubmit]);

  return (
    <Panel>
      Filter:
      <input
        type="text"
        onChange={usernameChanged}
        placeholder="Enter username"
      />
    </Panel>
  );
}


UsersFilter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(UsersFilter);
