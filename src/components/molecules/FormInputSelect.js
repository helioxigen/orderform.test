import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'utils';
import SelectInput from '../atoms/SelectInput';
import InputLabel from '../atoms/InputLabel';
import InputErrorLabel from '../atoms/InputErrorLabel';

const FormInput = ({
  className, label, error, value, onChange, options,
}) => (
  <div className={className}>
    <SelectInput value={value} onChange={onChange} options={options} />
    <InputLabel>{label}</InputLabel>
    {error && <InputErrorLabel>{error}</InputErrorLabel>}
  </div>
);

export default styled(FormInput)`
  font-size: 18px;
  position: relative;

  box-sizing: border-box;

  select:focus + label {
    opacity: 0;
  }

  border: ${ifProp('error', '2px solid #fd6464', '1px solid #dcdfe6')};
`;
