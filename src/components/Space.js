import React from 'react';
import styled from '@emotion/styled';

const space = (props) => {
  let color = '';
  
  const name = props.name.split('')
  const letter = name[0];
  const number = name[1];
  const letterCheck = ['A', 'C', 'E', 'G'];

  if (letterCheck.includes(letter) && number % 2 === 0) {
    color = 'black';
  } 
  
  if (!letterCheck.includes(letter) && number % 2 !== 0) {
    color = 'black';
  }

  const style = {
    background: `${color}`
  }
  
  return (
    <Container
      style={style}
      piece={props.piece}
      name={props.name}
    >
    </Container>
  )
}

const Container = styled.div({
  width: '100px',
  height: '100px'
})

export default space;
