import React from 'react';
import styled from 'styled-components';

const FormHeader = ({ className, title, subtitle }) => (
  <header className={className}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
);

export default styled(FormHeader)`
  h1 {
    margin: 0 0 1rem;
    font-weight: 600;
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    color: #ff408e;
    font-size: 1.6rem;
  }
`;
