import styled from 'styled-components';
import { ifProp } from 'utils';

const CCardType = ({ className, type }) => (
  <img className={className} alt={type} src={require(`./assets/${type}.png`)} />
);

export default styled(CCardType)`
  filter: grayscale(${ifProp('active', 1, 0)});
`;
