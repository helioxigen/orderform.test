import React from 'react';
import styled from 'styled-components';

const Arrow = styled.span`
  width: 20px;
  height: 2px;
  background: white;
  position: absolute;

  ::after {
    content: '';
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    position: absolute;
  }
`;

const CheckoutButton = ({ className }) => (
  <button type="submit" className={className}>
    BUY NOW
    {' '}
    <Arrow />
  </button>
);

export default styled(CheckoutButton)`
  background-color: #ff458f;
  box-sizing: border-box;
  padding: 15px 60px;
`;
