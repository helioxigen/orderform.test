import React from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'utils';
import fadeIn from 'animations/fadeIn';

const FormSection = ({ className, title, children }) => (
  <section className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default styled(FormSection)`
  margin: 4rem 0;

  display: grid;
  grid-template-columns: repeat(${prop('cols')}, 1fr);
  gap: 2rem;

  ${prop(
    'animated',
    a => a
      && css`
        animation: ${fadeIn} 0.7s;
      `,
  )};

  h2 {
    grid-column: 1 / -1;
    font-size: 2.4rem;
  }
`;
