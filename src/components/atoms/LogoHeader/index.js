import styled from 'styled-components';

const logoSrc = require('./assets/logo.png');

const LogoHeader = ({ className }) => (
  <header className={className}>
    <img src={logoSrc} alt="Scentbird logo" />
  </header>
);

export default styled(LogoHeader)`
  margin-bottom: 45px;
`;
