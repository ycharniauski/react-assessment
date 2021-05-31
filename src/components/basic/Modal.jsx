import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import { SIZES } from '@constants/theme';

const modalRoot = document.getElementById('modal-root');

const ModalContainer = styled.div`
  border-radius: ${SIZES.MODAL_BORDER_RADIUS};
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
  background: #fff;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 90vw;
  max-height: 90vh;
  height: ${(props) => (props.height || 'unset')};
  width: ${(props) => (props.width || SIZES.MODAL_WIDTH)};
`;

function Modal({ height, width, children }) {
  const clickCallback = useCallback((event) => {
    event.stopPropagation();
  }, []);

  return ReactDom.createPortal(
    <ModalContainer
      onClick={clickCallback}
      height={height}
      width={width}
    >
      {children}
    </ModalContainer>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

Modal.defaultProps = {
  height: undefined,
  width: undefined,
};


export default Modal;
