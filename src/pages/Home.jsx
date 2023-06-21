import React from 'react';
import '../App.css';
import styled from 'styled-components';
import Header from 'components/Header';
import Form from 'components/Form';
import List from 'components/List';

function Home() {
  return (
    <StLayout>
      <Header />
      <Form />
      <List />
    </StLayout>
  );
}

export default Home;

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
