import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';

import UsersRow from './UsersRow';

const List = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

function UsersList({ data }) {
  return (
    <List>
      {data.map((user) => (
        <UsersRow key={user.id} user={user} />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(UsersList);
