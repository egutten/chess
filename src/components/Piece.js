import React from 'react';
import styled from '@emotion/styled';
import { colorPieceBody, colorPieceText } from '../shared/helperFunctions';
import { connect } from 'react-redux';

const piece = (props) => {  
  
  const style = {
    background: `${colorPieceBody(props.team, props.fullName, props.activePiece)}`,
    color: `${colorPieceText(props.team)}`
  }
  
  return (
    <Container 
      style={style}
      onClick={props.clicked}
    >
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
  justifyContent: 'center',
  cursor: 'pointer'
})

const Label = styled.p({
  margin: '0px'
})

const mapStateToProps = state => {
  return {
    activePiece: state.activePiece
  }
}

export default connect(mapStateToProps)(piece);
