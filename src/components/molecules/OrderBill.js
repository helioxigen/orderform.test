import React from 'react';
import styled from 'styled-components';
import OrderBillRow from '../atoms/OrderBillRow';

const OrderBill = ({ className, values }) => (
  <section className={className}>
    {values.map(([title, value]) => (
      <OrderBillRow key={title} title={title} value={value} />
    ))}
  </section>
);

export default styled(OrderBill)`
  border: 1px solid inherit;
  border-width: 1px 0;

  padding: 15px 0;

  ${OrderBillRow} {
    margin: 5px 0;
  }
`;
