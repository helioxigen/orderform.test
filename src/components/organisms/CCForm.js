import React from 'react';
import styled from 'styled-components';
import FormRow from '../template/FormRow';
import CCHeader from '../molecules/CCHeader';
import FormInputText from '../molecules/FormInputText';

const CCForm = ({ className }) => (
  <div className={className}>
    <CCHeader />
    <FormRow sizes={[6, 4]}>
      <FormInputText label="Credit card number" autocomplete="cc-number" />
      <FormInputText label="Security code" autocomplete="cc-csc" />
    </FormRow>
    <FormRow>
      <FormInputText label="Month" autocomplete="cc-exp-month" />
      <FormInputText label="Year" autocomplete="cc-exp-year" />
      Exp.
    </FormRow>
  </div>
);

export default styled(CCForm)`
  border: 1px solid #e6e6e6;
  background-color: #fafafa;

  padding: 30px;
`;
