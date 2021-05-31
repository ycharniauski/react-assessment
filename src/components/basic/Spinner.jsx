import styled, { keyframes } from 'styled-components';

import { COLORS, SIZES } from '@constants/theme';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default styled.div`
  border: 10px solid ${COLORS.BUTTON_FACE};
  border-top: 10px solid transparent; 
  border-radius: 50%;
  width: ${SIZES.SPINNER_SIZE};
  height: ${SIZES.SPINNER_SIZE};
  animation: ${spinAnimation} .8s linear infinite;
`;
