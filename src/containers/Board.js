import React, { Component } from 'react';
import { connect } from 'react-redux';
import Space from '../components/Space';
import BoardContainer from '../components/BoardContainer';

export class Board extends Component {
  
  render () {
    let spaces = this.props.board.map(obj => (
      <Space
        key={obj.name}
        name={obj.name}
        piece={obj.piece}
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
    pieces: state.pieces
  }
}

const mapDispatchToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
