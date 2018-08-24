import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'utils';

const CheckboxInput = ({ className, checked, onChange }) => (
  <div className={className}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="checkmark" />
  </div>
);

export default styled(CheckboxInput)`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;

  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin: 0;
  }

  .checkmark::after {
    content: '';
    position: absolute;
    left: 30%;
    top: 12%;
    width: 20%;
    height: 45%;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);

    transition: 0.5s;

    opacity: ${ifProp('checked', 1, 0)};
  }

  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    pointer-events: none;

    background-color: ${ifProp('checked', '#ff6ba6', 'white')};
    border: 1px solid ${ifProp('checked', '#ff458f', '#dcdfe6')};

    transition: 0.2s;
  }
`;
