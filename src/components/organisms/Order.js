import React from 'react';
import styled from 'styled-components';
import OrderPicture from '../atoms/OrderPicture';
import OrderCheckbox from '../atoms/OrderCheckbox';
import OrderBillRow from '../atoms/OrderBillRow';
import OrderBill from '../molecules/OrderBill';

const Order = ({ className, imageSrc }) => (
  <aside className={className}>
    <OrderPicture src={imageSrc} />
    <OrderBill
      values={[
        ['Monthly subscription', '$14.95'],
        ['Shipping', 'FREE'],
        ['Tax', '$2.35'],
        ['Discount', <span className="discount">-$5</span>],
        ['Credit (Balance $100)', <OrderCheckbox label="$50" />],
      ]}
    />
    <OrderBillRow big title="TOTAL" value="$25.00" />
  </aside>
);

export default styled(Order)`
  box-sizing: border-box;
  padding: 4rem 3rem;
  border: 1px solid #e6e6e6;

  margin-right: 70px;

  .discount {
    color: #ff408e;
  }
`;
