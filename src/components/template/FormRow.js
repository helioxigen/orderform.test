import React from 'react';
import styled, { css } from 'styled-components';
import { useProp } from 'utils';
import FormInput from '../molecules/FormInput';

const FormRow = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const setFlexSizes = (sizes = []) => sizes.map(
  (v, idx) => css`
      :nth-child(${idx + 1}) {
        flex: ${v};
      }
    `,
);

export default styled(FormRow)`
  display: flex;

  margin: 10px 0;

  ${FormInput} {
    margin: 0 10px;

    ${useProp('sizes', setFlexSizes)};

    :last-child {
      margin-right: 0;
    }

    :first-child {
      margin-left: 0;
    }
  }
`;
