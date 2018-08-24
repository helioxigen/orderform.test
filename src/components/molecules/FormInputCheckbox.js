import React from 'react';
import styled from 'styled-components';
import { prop } from 'utils';
import InputLabel from '../atoms/InputLabel';
import CheckboxInput from '../atoms/CheckboxInput';

const FormInputCheckbox = ({
  className,
  label,
  input: { value, onChange },
}) => (
  <div className={className}>
    <CheckboxInput checked={!!value} onChange={onChange} />
    <InputLabel>{label}</InputLabel>
  </div>
);

export default styled(FormInputCheckbox)`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  grid-column: span ${prop('span', span => span || 1)};

  ${InputLabel} {
    position: relative;
  }
`;
