import React from 'react';
import FormHeader from 'components/atoms/FormHeader';
import FormSection from 'components/template/FormSection';
import FormRow from 'components/template/FormRow';
import AddressFormSection from 'components/molecules/AddressFormSection';
import FormInputText from '../molecules/FormInputText';
import FormFooter from '../molecules/FormFooter';
import CCForm from './CCForm';

export default () => (
  <form>
    <FormHeader
      title="Month-to-month subscription"
      subtitle="Billed monthly. Renews automatically, cancel any time. Free shipping."
    />
    <FormSection title="Create account">
      <FormRow>
        <FormInputText type="email" label="Email address" />
        <FormInputText type="password" label="Password" />
      </FormRow>
    </FormSection>
    <AddressFormSection type="Shipping" />
    <FormSection title="Secure credit card payment">
      <CCForm />
    </FormSection>
    <FormFooter />
  </form>
);
