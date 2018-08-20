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
  <FormSection cols={6} title={`${type} address`}>
    <FormInputText {...firstName} span={3} label="First name" />
    <FormInputText {...lastName} span={3} label="Last name" />
    <FormInputText {...address} span={4} label="Street address" />
    <FormInputText {...apt} span={2} label="Apt/Suite (Optional)" />
    <FormInputText {...postal} span={2} label="Postal code" />
    <FormInputText {...city} span={2} label="City" />
    <FormInputText {...state} span={2} label="State" />
    <FormInputText {...country} span={6} label="Country" />
  </FormSection>
);
