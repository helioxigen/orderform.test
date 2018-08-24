import styled from 'styled-components';
import { prop } from 'utils';

export default styled.p`
  margin: 0 1rem;
  font-size: 1.4rem;
  align-self: center;
  justify-self: center;

  grid-column: span ${prop('span', span => span || 1)};
`;
