import styled from 'styled-components';
import Icon from './Icon';

const CCSafetyMessage = ({ className }) => (
  <div className={className}>
    <Icon />
    {'128-bit encryption. You\'re safe'}
  </div>
);

export default styled(CCSafetyMessage)`
  color: #299501;
  font-size: 14px;
  text-transform: uppercase;
`;
