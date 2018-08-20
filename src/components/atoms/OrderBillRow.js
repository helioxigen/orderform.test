import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'utils';

const OrderBillRow = ({ className, title, value }) => (
  <p className={className}>
    <span>{title}</span>
    <span>{value}</span>
  </p>
);

export default styled(OrderBillRow)`
  span {
    font-size: ${ifProp('big', 1.4, 1.6)}rem;
  }

  span:first-child {
    text-align: left;
  }
  span:last-child {
    text-align: right;
  }
`;
