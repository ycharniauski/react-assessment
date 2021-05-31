import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '@components/basic/Button';
import Modal from '@components/basic/Modal';
import { COLORS } from '@constants/theme';

import alertIcon from './images/alert.svg';
import closeIcon from './images/close.svg';

const HEADER_HEIGHT = '48px';
const FOOTER_HEIGHT = '58px';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  border-bottom: solid 1px #bbb;
  padding: 0 16px 8px 16px;
  margin: 0 0 8px;
  width: 100%;
  height: ${HEADER_HEIGHT};
  > img {
    margin-right: 8px;
    object-fit: contain;
  }
`;

const Body = styled.div`
  flex: 1;
  width: 100%;
  margin: 0;
  word-break: break-word;
  text-align: left;
  max-height: calc(80vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  padding: 0 16px;
  overflow: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: ${COLORS.CONTENT_BG};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid ${COLORS.CONTENT_BG};
    background: ${COLORS.INPUT_BORDER};
  }

  &::-webkit-scrollbar-track { 
    background-color: ${COLORS.CONTENT_BG};
    border-radius: 8px; 
  } 

  &::-webkit-scrollbar:vertical {
    width: 8px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 8px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: ${FOOTER_HEIGHT};
  margin: 0;
  padding: 8px 16px;
  button {
    margin-left: 8px;
  }
`;

const Close = styled.img`
  cursor: pointer;
  margin-left: auto;
`;

function ConfirmModal({
  cancelClick,
  cancelText,
  closeVisible,
  confirmClick,
  confirmDisabled,
  confirmText,
  children,
  title
}) {
  return (
    <Modal>
      <Content>
        <Header>
          <img alt="Alert" src={alertIcon} />
          {title}
          {closeVisible && <Close alt="Close" onClick={cancelClick} src={closeIcon} />}
        </Header>
        <Body>
          {children}
        </Body>
        <Footer>
          <Button
            primary
            onClick={confirmClick}
            disabled={confirmDisabled}
          >
            {confirmText}
          </Button>
          <Button onClick={cancelClick}>{cancelText}</Button>
        </Footer>
      </Content>
    </Modal>
  );
}

ConfirmModal.propTypes = {
  cancelText: PropTypes.string,
  cancelClick: PropTypes.func.isRequired,
  confirmDisabled: PropTypes.bool,
  confirmText: PropTypes.string,
  confirmClick: PropTypes.func.isRequired,
  closeVisible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string,
};

ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  confirmDisabled: false,
  closeVisible: false,
  title: '',
};

export default ConfirmModal;
