import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { ConfirmModal } from '@components/modals';

function DeleteFilesConfirmModal({
  cancelClick,
  confirmClick,
}) {
  return (
    <ConfirmModal
      cancelClick={cancelClick}
      cancelText="No"
      closeVisible
      confirmClick={confirmClick}
      confirmText="Yes"
      title="Are you sure you want to delete all of your files?"
    >
      This action cannot be undone
    </ConfirmModal>
  );
}

DeleteFilesConfirmModal.propTypes = {
  cancelClick: PropTypes.func.isRequired,
  confirmClick: PropTypes.func.isRequired,
};

export default memo(DeleteFilesConfirmModal);
