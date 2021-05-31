import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

function UsersRow({ user }) {
  const {
    name, address, email, phone, username
  } = user;

  return (
    <Row>
      <UserInfo>
        <span>{`Name: ${name}`}</span>
        <span>{`Username: ${username}`}</span>
      </UserInfo>
      <div>
        <div>
          <span>{address.street}</span>
          <span>{address.suite}</span>
          <span>{address.city}</span>
          <span>{address.zipcode}</span>
        </div>
        <div>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </div>
    </Row>
  );
}

UsersRow.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersRow;
