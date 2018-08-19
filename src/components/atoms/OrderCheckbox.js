import React from 'react';
import styled from 'styled-components';

const OrderCheckbox = ({ className, label, checked }) => (
  <label className={className}>
    {label}
    <input type="checkbox" checked={checked} />
    <span className="checkmark" />
  </label>
);

export default styled(OrderCheckbox)`
  .checkmark {
    border-radius: 2px;
    border: 1px solid #979797;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    background: white;
  }
`;
