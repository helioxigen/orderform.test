import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'utils';
// import TextInput from '../atoms/TextInput';
import InputLabel from '../atoms/InputLabel';
import InputErrorLabel from '../atoms/InputErrorLabel';
import TextInput from '../atoms/TextInput';

const FormInputText = ({
  className,
  label,
  type,
  meta: { touched, error },
  input,
}) => (
  <div className={className}>
    <TextInput type={type} data-has-value={!!input.value} {...input} />
    <InputLabel>{label}</InputLabel>
    {touched && error && <InputErrorLabel>{error}</InputErrorLabel>}
  </div>
);

export default styled(FormInputText)`
  position: relative;
  font-size: 18px;
  box-sizing: border-box;

  [data-has-value='true'] + label,
  input:focus + label {
    background: white;

    transform: translateY(-125%) translateX(-0.5em) scale(0.85);
  }

  border: ${ifProp('error', '2px solid #fd6464', '1px solid #dcdfe6')};
`;
