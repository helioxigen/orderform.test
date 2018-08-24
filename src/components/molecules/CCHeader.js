import React from 'react';
import styled from 'styled-components';
import CCSafetyMessage from '../atoms/CCSafetyMessage';
import CCardType from '../atoms/CCardType';

const CCHeader = ({ className, currentTypes }) => (
  <header className={className}>
    <CCSafetyMessage />
    <div className="cards">
      {['visa', 'master', 'maestro', 'american'].map(type => (
        <CCardType
          key={type}
          type={type}
          current={currentTypes.some(t => t === type)}
        />
      ))}
    </div>
  </header>
);

export default styled(CCHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;

  .cards ${CCardType} {
    margin: 0 5px;
  }
`;
