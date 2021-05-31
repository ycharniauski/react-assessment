import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '@components/basic/Spinner';
import Modal from '@components/basic/Modal';

import closeIcon from './images/close.svg';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const LoaderText = styled.div`
  color: #216298;
  margin-top: 16px;
`;

const Close = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  margin-left: auto;
`;

function LoaderModal({ onClose, text }) {
  return (
    <Modal>
      <Content>
        {!!onClose && <Close alt="Close" onClick={onClose} src={closeIcon} />}
        <Spinner />
        {text && <LoaderText>{text}</LoaderText>}
      </Content>
    </Modal>
  );
}

LoaderModal.propTypes = {
  onClose: PropTypes.func,
  text: PropTypes.string,
};

LoaderModal.defaultProps = {
  onClose: undefined,
  text: '',
};

export default memo(LoaderModal);
