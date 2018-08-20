import styled from 'styled-components';
import slideBottom from 'animations/slideBottom';

export default styled.label`
  position: absolute;
  bottom: -2em;
  color: #ff0000;
  left: 0;

  animation: ${slideBottom} 0.2s forwards;

  line-height: 20px;
  font-size: 12px;
`;
