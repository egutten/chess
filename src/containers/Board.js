import React, { Component } from 'react';
import { connect } from 'react-redux';
import Space from '../components/Space';
import BoardContainer from '../components/BoardContainer';
import * as actions from '../store/actions';

export class Board extends Component {
  
  pieceSelectHandler = (event, piece) => {
    event.stopPropagation();
    if (this.props.activePiece && this.props.activePiece !== piece) {
      this.props.capturePiece(piece);
    } else {
      this.props.activatePiece(piece);
    }
  }
  
  spaceSelectHandler = (name) => {
    if (this.props.activePiece) {
      this.props.chooseSpace(name);
    } 
  }
  
  render () {
    let spaces = this.props.board.map(obj => (
      <Space
        key={obj.name}
        name={obj.name}
        piece={obj.piece}
        pieceClicked={(event, piece) => this.pieceSelectHandler(event, obj.piece)}
        spaceClicked={(name) => this.spaceSelectHandler(obj.name)}
      >
      </Space>    
    ));
    
    let userMessage = this.props.userMessage;
    
    return (
      <React.Fragment>
        {userMessage}
        <BoardContainer>
        {spaces}
        </BoardContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    activePiece: state.activePiece,
    captured: state.captured,
    userMessage: state.userMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activatePiece: (piece) => dispatch(actions.activatePiece(piece)),
    chooseSpace: (name) => dispatch(actions.chooseSpace(name)),
    capturePiece: (piece) => dispatch(actions.capturePiece(piece))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
