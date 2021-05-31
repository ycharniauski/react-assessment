import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';
import styled from 'styled-components';

import { TextInput } from '@components/basic';

import ConfirmModal from '../ConfirmModal';


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PasscodeDescription = styled.div`
  width: 100%;
  text-align: left;
  margin: 8px 0;
`;

function ConfirmWithPasscodeModal({
  cancelClick,
  cancelText,
  closeVisible,
  confirmClick,
  confirmText,
  children,
  passcode,
  passcodeDescription,
  title,
}) {
  const [code, setCode] = useState('');
  const codeChange = useCallback(({ target }) => {
    const { value } = target;
    setCode(value);
  }, []);

  return (
    <ConfirmModal
      cancelClick={cancelClick}
      cancelText={cancelText}
      closeVisible={closeVisible}
      confirmDisabled={code.toLowerCase() !== passcode.toLowerCase()}
      confirmClick={confirmClick}
      confirmText={confirmText}
      title={title}
    >
      <Content>
        {children}
        <PasscodeDescription>{passcodeDescription}</PasscodeDescription>
        <TextInput
          onChange={codeChange}
          value={code}
        />
      </Content>
    </ConfirmModal>
  );
}

ConfirmWithPasscodeModal.propTypes = {
  cancelText: PropTypes.string,
  cancelClick: PropTypes.func.isRequired,
  closeVisible: PropTypes.bool,
  confirmText: PropTypes.string,
  confirmClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  passcode: PropTypes.string.isRequired,
  passcodeDescription: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ConfirmWithPasscodeModal.defaultProps = {
  cancelText: 'Cancel',
  closeVisible: false,
  confirmText: 'Confirm',
  title: '',
};

export default memo(ConfirmWithPasscodeModal);
