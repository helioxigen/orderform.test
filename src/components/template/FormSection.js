import styled from 'styled-components';

const FormSection = ({ className, title, children }) => (
  <section className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default styled(FormSection)`
  margin: 40px 0;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
