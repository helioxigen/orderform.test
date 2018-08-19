import React from 'react';
import styled from 'styled-components';

const OrderPicture = ({ className, src, name }) => (
  <header className={className}>
    <img src={src} alt={name} />
  </header>
);

export default styled(OrderPicture)`
  width: 100%;
  padding-bottom: 100%;
`;
