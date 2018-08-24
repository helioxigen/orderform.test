import React from 'react';
import styled from 'styled-components';

const OrderPicture = ({ className, src, name }) => (
  <header className={className}>
    <figure>
      <img src={src} alt={name} />
    </figure>
  </header>
);

export default styled(OrderPicture)`
  width: 100%;
  padding-bottom: 100%;
`;
