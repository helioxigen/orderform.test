import styled from 'styled-components';
import { ifProp } from 'utils';

const FormError = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export default styled(FormError)`
  font-size: 12px;
  color: ${ifProp('active', '#ff0048', 'transparent')};
  pointer-events: ${ifProp('active', 'all', 'none')};
  user-select: ${ifProp('active', 'all', 'none')};
  height: 1em;
  margin: 5px 0;

  transition: 0.25s;
`;
