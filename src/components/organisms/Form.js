import React from 'react';
import FormHeader from 'components/atoms/FormHeader';
import FormSection from 'components/template/FormSection';
import FormRow from 'components/template/FormRow';
import AddressFormSection from 'components/molecules/AddressFormSection';
import { reduxForm, Field, Fields } from 'redux-form';
import { required, minLength10, email } from 'utils/formValidators';
import FormInputText from '../molecules/FormInputText';
import FormFooter from '../molecules/FormFooter';
import CCFormLayout from '../template/CCFormLayout';
import CCHeader from '../molecules/CCHeader';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <FormHeader
      title="Month-to-month subscription"
      subtitle="Billed monthly. Renews automatically, cancel any time. Free shipping."
    />
    <FormSection cols={2} title="Create account">
      <Field
        label="Email address"
        name="email"
        type="email"
        validate={[required, email]}
        component={FormInputText}
        span={1}
      />
      <Field
        label="Password"
        name="password"
        type="password"
        validate={[required, minLength10]}
        component={FormInputText}
        span={1}
      />
    </FormSection>
    <Fields
      names={[
        'firstName',
        'lastName',
        'address',
        'apt',
        'postal',
        'city',
        'state',
        'country',
      ]}
      component={AddressFormSection}
      type="Shipping"
    />
    <FormSection title="Secure credit card payment">
      <CCFormLayout>
        <CCHeader />
        <FormRow sizes={[6, 4]}>
          <Field
            label="Credit card number"
            name="cc.number"
            autocomplete="cc-number"
            component={FormInputText}
          />
          <Field
            label="Security code"
            name="cc.seccode"
            autocomplete="cc-csc"
            component={FormInputText}
          />
        </FormRow>
        <FormRow>
          <Field
            label="Month"
            name="cc.exp.month"
            autocomplete="cc-exp-month"
            component={FormInputText}
          />
          <Field
            label="Year"
            name="cc.exp.year"
            autocomplete="cc-exp-year"
            component={FormInputText}
          />
          Exp.
        </FormRow>
      </CCFormLayout>
    </FormSection>
    <FormFooter />
  </form>
);

export default reduxForm({ form: 'sub' })(Form);
