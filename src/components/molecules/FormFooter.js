import React from 'react';
import styled from 'styled-components';
import CheckoutButton from '../atoms/CheckoutButton';

const FormFooter = ({ className }) => (
  <footer className={className}>
    <a>Back</a>
    <CheckoutButton />
  </footer>
);

export default styled(FormFooter)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    margin-right: 40px;
  }
`;
