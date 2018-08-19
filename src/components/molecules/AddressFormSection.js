import React from 'react';
import FormInputText from './FormInputText';
import FormRow from '../template/FormRow';
import FormSection from '../template/FormSection';

export default ({ type }) => (
  <FormSection title={`${type} address`}>
    <FormRow>
      <FormInputText label="First name" />
      <FormInputText label="Last name" />
    </FormRow>
    <FormRow sizes={[2, 1]}>
      <FormInputText label="Street address" />
      <FormInputText label="Apt/Suite (Optional)" />
    </FormRow>
    <FormRow>
      <FormInputText label="Postal code" />
      <FormInputText label="City" />
      <FormInputText label="State" />
    </FormRow>
    <FormRow>
      <FormInputText label="Country" />
    </FormRow>
  </FormSection>
);
