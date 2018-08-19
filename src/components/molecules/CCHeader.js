import React from 'react';
import styled from 'styled-components';
import CCSafetyMessage from '../atoms/CCSafetyMessage';
import CCardType from '../atoms/CCardType';

const CCHeader = ({ className }) => (
  <header className={className}>
    <CCSafetyMessage />
    <div className="cards">
      {['visa', 'master', 'maestro', 'american'].map(type => (
        <CCardType key={type} type={type} />
      ))}
    </div>
  </header>
);

export default styled(CCHeader)`
  .cards ${CCardType} {
    margin: 0 5px;
  }
`;
