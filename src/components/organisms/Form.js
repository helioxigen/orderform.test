import React from 'react';
import FormHeader from 'components/atoms/FormHeader';
import FormSection from 'components/template/FormSection';
import AddressFormSection from 'components/molecules/AddressFormSection';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  reduxForm, Field, Fields, formValueSelector,
} from 'redux-form';
import {
  required,
  minLength10,
  email,
  isNot111,
  ccValid,
  detectCardType,
} from 'utils/formValidators';
import FormInputText from '../molecules/FormInputText';
import FormFooter from '../molecules/FormFooter';
import CCFormLayout from '../template/CCFormLayout';
import CCHeader from '../molecules/CCHeader';
import CCLabel from '../atoms/CCLabel';
import FormText from '../atoms/FormText';
import FormInputCheckbox from '../molecules/FormInputCheckbox';

const Form = ({
  handleSubmit,
  shippingAddressAsBilling,
  currentTypes,
  // form: {
  //   sub: {
  //     values: { shippingAddressAsBilling },
  //   },
  // },
}) => (
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
      />
      <Field
        label="Password"
        name="password"
        type="password"
        validate={[required, minLength10]}
        component={FormInputText}
      />
    </FormSection>
    <FormSection cols={6} title="Shipping address">
      <Field
        label="First name"
        name="firstName"
        span={3}
        validate={[required]}
        component={FormInputText}
      />
      <Field
        label="Last name"
        name="lastName"
        span={3}
        validate={[required]}
        component={FormInputText}
      />
      <Fields
        names={[
          'shipping.address',
          'shipping.apt',
          'shipping.postal',
          'shipping.city',
          'shipping.state',
          'shipping.country',
        ]}
        component={AddressFormSection}
        type="shipping"
      />
      <Field
        label="Mobile number (Optional)"
        name="mobileNumber"
        span={3}
        validate={[required]}
        component={FormInputText}
      />
      <FormText span={3}>We may send you special discounts and offers</FormText>
      <Field
        label="Use this address as my billing address"
        name="shippingAddressAsBilling"
        span={6}
        component={FormInputCheckbox}
      />
    </FormSection>
    {!shippingAddressAsBilling && (
      <FormSection cols={6} title="Billing address">
        <Fields
          names={[
            'billing.address',
            'billing.apt',
            'billing.postal',
            'billing.city',
            'billing.state',
            'billing.country',
          ]}
          component={AddressFormSection}
          type="billing"
        />
      </FormSection>
    )}
    <FormSection title="Secure credit card payment">
      <CCFormLayout>
        <CCHeader currentTypes={currentTypes} />
        <Field
          label="Credit card number"
          name="cc.number"
          autocomplete="cc-number"
          validate={[required, ccValid]}
          component={FormInputText}
          span={3}
        />
        <Field
          label="Security code"
          name="cc.seccode"
          autocomplete="cc-csc"
          component={FormInputText}
          validate={[required, isNot111]}
          span={2}
        />
        <Field
          label="Month"
          name="cc.exp.month"
          autocomplete="cc-exp-month"
          type="number"
          validate={[required]}
          component={FormInputText}
        />
        <Field
          label="Year"
          name="cc.exp.year"
          autocomplete="cc-exp-year"
          type="number"
          validate={[required]}
          component={FormInputText}
        />
        <CCLabel>Exp.</CCLabel>
      </CCFormLayout>
    </FormSection>
    <FormFooter />
  </form>
);

const valueSelector = formValueSelector('sub');

export default compose(
  reduxForm({
    form: 'sub',
    initialValues: {
      shippingAddressAsBilling: true,
    },
  }),
  connect(state => ({
    shippingAddressAsBilling: valueSelector(state, 'shippingAddressAsBilling'),
    currentTypes: detectCardType(valueSelector(state, 'cc.number')),
  })),
)(Form);
