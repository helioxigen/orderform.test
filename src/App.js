import React from 'react';
import PageLayout from 'components/template/PageLayout';
import Form from 'components/organisms/Form';
import Order from 'components/organisms/Order';
import styled from 'styled-components';
import LogoHeader from 'components/atoms/LogoHeader';

const App = ({ className }) => (
  <div className={className}>
    <LogoHeader />
    <PageLayout>
      <Order />
      <Form />
    </PageLayout>
  </div>
);

export default styled(App)`
  padding: 20px 120px 120px;
`;
