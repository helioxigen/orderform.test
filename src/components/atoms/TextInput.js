import React from 'react';
import styled from 'styled-components';

const TextInput = ({ className, value, onChange }) => (
  <input value={value} onChange={onChange} className={className} />
);

export default styled(TextInput)`
  font-size: inherit;
`;
