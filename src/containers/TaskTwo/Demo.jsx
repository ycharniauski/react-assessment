import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '@components/basic';
import { LoaderModal } from '@components/modals';

import { sleep } from '@utils/timeUtils';

import DeleteFilesConfirmModal from './DeleteFilesConfirmModal';
import DeleteReportsConfirmModal from './DeleteReportsConfirmModal';

const HISTORY = ['January', 'February', 'March', 'April', 'May', 'June']
  .map((month) => ({
    id: month,
    name: `${month} 2020`
  }));

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button {
    margin: 4px;
  }
`;

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [removeFilesDlgVisible, setRemoveFilesDlgVisible] = useState(false);
  const [removeReportDlgVisible, setRemoveReportDlgVisible] = useState(false);

  const openLoader = useCallback(async () => {
    setLoading(true);
  }, []);

  const closeLoader = useCallback(async () => {
    setLoading(false);
  }, []);

  const removeFilesOpen = useCallback(() => {
    setRemoveFilesDlgVisible(true);
  }, []);

  const removeFiles = useCallback(async () => {
    setRemoveFilesDlgVisible(false);
    setLoading(true);
    await sleep(1000);
    setLoading(false);
  }, []);

  const removeFilesCancel = useCallback(() => {
    setRemoveFilesDlgVisible(false);
  }, []);

  const removeReport = useCallback(async () => {
    setRemoveReportDlgVisible(false);
    setLoading(true);
    await sleep(1000);
    setLoading(false);
  }, []);

  const removeReportOpen = useCallback(() => {
    setRemoveReportDlgVisible(true);
  }, []);

  const removeReportCancel = useCallback(() => {
    setRemoveReportDlgVisible(false);
  }, []);

  return (
    <Container>
      <Button disabled={loading} onClick={openLoader}>Open loader modal</Button>
      <Button disabled={loading} onClick={removeFilesOpen}>Delete files</Button>
      <Button disabled={loading} onClick={removeReportOpen}>Delete report</Button>

      {loading && <LoaderModal text="Removing" onClose={closeLoader} />}

      {removeFilesDlgVisible && (
      <DeleteFilesConfirmModal
        cancelClick={removeFilesCancel}
        confirmClick={removeFiles}
      />
      )}

      {removeReportDlgVisible && (
      <DeleteReportsConfirmModal
        confirmClick={removeReport}
        cancelClick={removeReportCancel}
        history={HISTORY}
      />
      )}
    </Container>
  );
};

export default Demo;
