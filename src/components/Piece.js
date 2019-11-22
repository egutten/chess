import React from 'react';
import styled from '@emotion/styled';
import { colorPieceBody, colorPieceText } from '../shared/helperFunctions';

const piece = (props) => {  
  
  const style = {
    background: `${colorPieceBody(props.team)}`,
    color: `${colorPieceText(props.team)}`
  }
  
  return (
    <Container style={style}>
      <Label>{props.type}</Label>
    </Container>
  )
}

const Container = styled.div({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: '1px solid red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Label = styled.p({
  margin: '0px'
})

export default piece;
