import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'utils';
import TextInput from '../atoms/TextInput';
import InputLabel from '../atoms/InputLabel';
import InputErrorLabel from '../atoms/InputErrorLabel';

const FormInputText = ({
  className,
  label,
  error,
  value,
  onChange,
  type,
  ...props
}) => (
  <div className={className}>
    <TextInput
      data-non-empty={!!value}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
    <InputLabel>{label}</InputLabel>
    {error && <InputErrorLabel>{error}</InputErrorLabel>}
  </div>
);

export default styled(FormInputText)`
  position: relative;
  font-size: 18px;
  box-sizing: border-box;

  [data-non-empty='true'] + label,
  input:focus + label {
    background: white;

    transform: translateY(-125%) translateX(-0.5em) scale(0.85);
  }

  border: ${ifProp('error', '2px solid #fd6464', '1px solid #dcdfe6')};
`;
