import styled from 'styled-components';

import { COLORS } from '@constants/theme';

const TextInput = styled.input`
  border: solid 1px ${COLORS.INPUT_BORDER};
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

export default TextInput;
