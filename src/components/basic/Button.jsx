import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import styled from 'styled-components';

import { COLORS } from '@constants/theme';

const Primary = styled.button`
  background: ${COLORS.BUTTON_FACE};
  color: ${COLORS.CONTENT_BG};
  border: none;
  font-weight: bold;
  border-radius: 4px;
  padding: 8px 16px;
  height: 32px;
  min-width: 100px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 4px rgba(33, 98, 152, 0.2);
  }
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

const Secondary = styled.button`
  background: ${COLORS.CONTENT_BG};
  color: ${COLORS.BUTTON_FACE};
  border: solid 1px ${COLORS.BUTTON_FACE};
  font-weight: bold;
  border-radius: 4px;
  padding: 8px 16px;
  height: 32px;
  min-width: 100px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 4px rgba(33, 98, 152, 0.2);
  }
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

function Button({
  disabled,
  primary,
  children,
  onClick
}) {
  const clickCallback = useCallback((event) => {
    event.stopPropagation();
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  if (primary) {
    return <Primary disabled={disabled} onClick={clickCallback}>{children}</Primary>;
  }

  return <Secondary disabled={disabled} onClick={clickCallback}>{children}</Secondary>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  disabled: false,
};

export default memo(Button);
