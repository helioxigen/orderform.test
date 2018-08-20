import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const CCSafetyMessage = ({ className }) => (
  <div className={className}>
    <Icon />
    <span>
      128-bit encryption. You
      {'\''}
      re safe
    </span>
  </div>
);

export default styled(CCSafetyMessage)`
  color: #299501;
  font-size: 1.4rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
  }
`;
