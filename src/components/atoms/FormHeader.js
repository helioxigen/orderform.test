import styled from 'styled-components';

const FormHeader = ({ className, title, subtitle }) => (
  <header className={className}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
);

export default styled(FormHeader)`
  h1 {
    margin: 0 0 10px 0;
    font-weight: 600;
    font-size: 36px;
    text-transform: uppercase;
  }
  h2 {
    color: #ff408e;
    font-size: 16px;
  }
`;
