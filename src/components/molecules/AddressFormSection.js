import React from 'react';
import FormInputText from './FormInputText';

export default ({ sectionTitle, type, ...formProps }) => {
  const {
    address, apt, postal, city, state, country,
  } = formProps[type];

  return (
    <>
      <FormInputText {...address} span={4} label="Street address" />
      <FormInputText {...apt} span={2} label="Apt/Suite (Optional)" />
      <FormInputText {...postal} span={2} label="Postal code" />
      <FormInputText {...city} span={2} label="City" />
      <FormInputText {...state} span={2} label="State" />
      <FormInputText {...country} span={6} label="Country" />
    </>
  );
};
