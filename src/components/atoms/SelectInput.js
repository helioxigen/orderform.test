import React from 'react';
import styled from 'styled-components';

const SelectInput = ({
  className, value, onChange, options,
}) => (
  <select className={className} value={value} onChange={onChange}>
    {Object.entries(options).map(([optionValue, optionLabel]) => (
      <option value={optionValue}>{optionLabel}</option>
    ))}
  </select>
);

export default styled(SelectInput)``;
