import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styled from 'styled-components';

import { ConfirmWithPasscodeModal } from '@components/modals';
import { COLORS } from '@constants/theme';

const Description = styled.div`
  margin-bottom: 4px;
`;


const List = styled.ul`
  border: solid 1px ${COLORS.INPUT_BORDER};
  width: 100%;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  max-height: 100px;
  padding: 4px;

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

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

function DeleteReportsConfirmModal({
  cancelClick,
  confirmClick,
  history,
}) {
  return (
    <ConfirmWithPasscodeModal
      cancelClick={cancelClick}
      cancelText="Cancel"
      confirmClick={confirmClick}
      confirmText="Delete all"
      closeVisible
      title="Are you sure you want to delete report and its history?"
      passcode="Delete"
      passcodeDescription="Please type the word 'Delete' to remove the Executive metrics report and its assosicated history"
    >
      <Content>
        <Description>
          If you delete the
          <b> Executive metrics </b>
          report, you will also delete the assotiative history:
        </Description>
        <List>
          {history.map(({ id, name }) => (
            <li key={id} href="#">
              {name}
            </li>
          ))}
        </List>
      </Content>
    </ConfirmWithPasscodeModal>
  );
}

DeleteReportsConfirmModal.propTypes = {
  cancelClick: PropTypes.func.isRequired,
  confirmClick: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
};

export default memo(DeleteReportsConfirmModal);
