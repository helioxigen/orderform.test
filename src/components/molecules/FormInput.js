import React from 'react';
import styled from 'styled-components';
import slideBottom from 'animations/slideBottom';
import { ifProp } from 'utils';
import SelectInput from '../atoms/SelectInput';
import TextInput from '../atoms/TextInput';

const FormInput = ({
  className,
  label,
  error,
  value,
  onChange,
  type,
  options,
}) => (
  <div className={className}>
    {type === 'select' ? (
      <SelectInput value={value} onChange={onChange} options={options} />
    ) : (
      <TextInput value={value} onChange={onChange} />
    )}
    <label>{label}</label>
    {error && <div className="error">{error}</div>}
  </div>
);

export default styled(FormInput)`
  position: relative;

  box-sizing: border-box;
  padding: 16px;

  font-size: 18px;

  label {
    position: absolute;

    color: #9b9b9b;
  }

  input:focus + label {
    font-size: 14px;
    background: white;

    transform: translateY(-30px);
    transition: transform 0.3s;
  }

  .error {
    line-height: 20px;
    font-size: 12px;
    position: absolute;
    bottom: -1em;
    animation: ${slideBottom} 0.2s forwards;
  }

  ${ifProp('error', '2px solid #fd6464', '1px solid #dcdfe6')};
`;
