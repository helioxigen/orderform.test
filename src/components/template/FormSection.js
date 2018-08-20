import React from 'react';
import styled from 'styled-components';
import { prop } from 'utils';

const FormSection = ({ className, title, children }) => (
  <section className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default styled(FormSection)`
  margin: 40px 0;

  display: grid;
  grid-template-columns: repeat(${prop('cols')}, 1fr);
  gap: 20px;

  h2 {
    grid-column: 1 / -1;
    font-size: 24px;
  }
`;
