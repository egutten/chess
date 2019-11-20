import React from 'react';
import styled from '@emotion/styled';

const boardContainer = (props) => (
  <Container>
    {props.children}
  </Container>
)

const Container = styled.div({
  width: '800px',
  margin: '20px auto',
  display: 'flex',
  flexWrap: 'wrap',
  border: '1px solid black'
})

export default boardContainer;
