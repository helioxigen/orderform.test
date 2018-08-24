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
  meta: { touched, error, active },
  input,
}) => (
  <div className={className} data-has-error={touched && !!error}>
    <TextInput type={type} data-not-empty={!!input.value} {...input} />
    <InputLabel>{label}</InputLabel>
    {touched && error && !active && <InputErrorLabel>{error}</InputErrorLabel>}
  </div>
);

export default styled(FormInputText)`
  position: relative;
  font-size: 1.8rem;
  box-sizing: border-box;

  grid-column: span ${prop('span', span => span || 1)};

  input[data-not-empty='true'] + label,
  input:focus + label {
    background: linear-gradient(
      transparent 50%,
      white 50%,
      white 60%,
      transparent 60%
    );

    transform: translateY(-125%) translateX(-0.5em) scale(0.85);
  }

  border: 1px solid #dcdfe6;

  ${({ meta }) => meta.touched
    && meta.error
    && css`
      border: 1px solid #fd6464;
      outline: ${meta.active ? 0 : 1}px solid #fd6464;
    `};
`;
