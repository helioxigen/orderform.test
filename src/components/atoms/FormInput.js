import styled from 'styled-components';
import slideBottom from 'animations/slideBottom';

const FormInput = ({
  className, fieldName, label, value, onChange, error,
}) => (
  <div className={className} data-has-error={!!error}>
    <input value={value} onChange={onChange} id={fieldName} />
    <label htmlFor={fieldName}>{label}</label>
    {error && <div className="error">{error}</div>}
  </div>
);

export default styled(FormInput)`
  position: relative;

  box-sizing: border-box;
  padding: 16px;

  font-size: 18px;

  label {
    position: absolute;

    color: #9b9b9b;
  }

  input {
    font-size: inherit;
  }

  input:focus + label {
    font-size: 14px;
    background: white;

    transform: translateY(-30px);
    transition: transform 0.3s;
  }

  .error {
    line-height: 20px;
    font-size: 12px;
    position: absolute;
    bottom: -1em;
    animation: ${slideBottom} 0.2s forwards;
  }

  border: 1px solid #dcdfe6;
`;
