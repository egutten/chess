import React from 'react';
import styled from '@emotion/styled';
import { colorSpaces, placePiece } from '../shared/helperFunctions';

const space = (props) => {
  const piece = placePiece(props.piece, props.pieceClicked);
  
  const style = {
    background: `${colorSpaces(props.name)}`
  }

  return (
    <Container
      style={style}
      name={props.name}
      onClick={props.spaceClicked}
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
  alignItems: 'center',
  cursor: 'pointer'
})

export default space;
