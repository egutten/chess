import React from 'react';
import styled from '@emotion/styled';
import { colorSpaces, placePiece } from '../shared/helperFunctions';

const space = (props) => {
  
  let piece = null;
  if (props.piece) {
    piece = placePiece(props.piece);
  }
  
  const style = {
    background: `${colorSpaces(props.name)}`
  }

  return (
    <Container
      style={style}
      name={props.name}
    >
      {piece}
    </Container>
  )
}

const Container = styled.div({
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export default space;
