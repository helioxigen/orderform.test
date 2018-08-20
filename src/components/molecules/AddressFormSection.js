import React from 'react';
import FormInputText from './FormInputText';
import FormRow from '../template/FormRow';
import FormSection from '../template/FormSection';

export default ({
  type,
  firstName,
  lastName,
  address,
  apt,
  postal,
  city,
  state,
  country,
}) => (
  <FormSection title={`${type} address`}>
    <FormRow>
      <FormInputText {...firstName} label="First name" />
      <FormInputText {...lastName} label="Last name" />
    </FormRow>
    <FormRow sizes={[2, 1]}>
      <FormInputText {...address} label="Street address" />
      <FormInputText {...apt} label="Apt/Suite (Optional)" />
    </FormRow>
    <FormRow>
      <FormInputText {...postal} label="Postal code" />
      <FormInputText {...city} label="City" />
      <FormInputText {...state} label="State" />
    </FormRow>
    <FormRow>
      <FormInputText {...country} label="Country" />
    </FormRow>
  </FormSection>
);
