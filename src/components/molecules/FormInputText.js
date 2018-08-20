import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'utils';
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
  <div className={className} data-has-error={touched && !!error}>
    <TextInput type={type} data-has-value={!!input.value} {...input} />
    <InputLabel>{label}</InputLabel>
    {touched && error && <InputErrorLabel>{error}</InputErrorLabel>}
  </div>
);

export default styled(FormInputText)`
  position: relative;
  font-size: 18px;
  box-sizing: border-box;

  grid-column: span ${prop('span')};

  [data-has-value='true'] + label,
  input:focus + label {
    background: linear-gradient(transparent 40%, white 60%, transparent 70%);

    transform: translateY(-125%) translateX(-0.5em) scale(0.85);
  }

  border: 1px solid #dcdfe6;

  ${({ meta }) => meta.touched
    && meta.error
    && css`
      border: 2px solid #fd6464;
    `};
`;
