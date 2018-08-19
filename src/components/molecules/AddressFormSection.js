import FormInput from '../atoms/FormInput';
import FormRow from '../template/FormRow';
import FormSection from '../template/FormSection';

export default ({ type }) => (
  <FormSection title={`${type} address`}>
    <FormRow>
      <FormInput label="First name" />
      <FormInput label="Last name" />
    </FormRow>
    <FormRow sizes={[2, 1]}>
      <FormInput label="Street address" />
      <FormInput label="Apt/Suite (Optional)" />
    </FormRow>
    <FormRow>
      <FormInput label="Postal code" />
      <FormInput label="City" />
      <FormInput label="State" />
    </FormRow>
    <FormRow>
      <FormInput label="Country" />
    </FormRow>
  </FormSection>
);
