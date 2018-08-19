import React from 'react';
import styled, { css } from 'styled-components';
import { useProp } from 'utils';
import FormInputText from '../molecules/FormInputText';
import FormInputSelect from '../molecules/FormInputSelect';

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

  margin: 20px 0;

  ${FormInputText}, ${FormInputSelect} {
    margin: 0 10px;

    flex: 1;

    ${useProp('sizes', setFlexSizes)};

    :last-child {
      margin-right: 0;
    }

    :first-child {
      margin-left: 0;
    }
  }
`;
