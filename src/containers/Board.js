import React, { Component } from 'react';
import { connect } from 'react-redux';
import Space from '../components/Space';
import BoardContainer from '../components/BoardContainer';
import * as actions from '../store/actions';

export class Board extends Component {
  
  pieceSelectHandler = (event, piece) => {
    event.stopPropagation();
    if (this.props.activePiece) {
      this.props.capturePiece(piece);
    } else {
      this.props.activatePiece(piece);
    }
  }
  
  spaceSelectHandler = (name) => {
    this.props.chooseSpace(name);
  }
  
  render () {
    console.log(this.props.captured);
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
    
    return (
      <BoardContainer>
      {spaces}
      </BoardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    activePiece: state.activePiece,
    captured: state.captured
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
