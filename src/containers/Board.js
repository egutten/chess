import React, { Component } from 'react';
import { connect } from 'react-redux';
import Space from '../components/Space';
import BoardContainer from '../components/BoardContainer';

class Board extends Component {
  state = {
    spaceNames: []
  }
  
  componentDidMount() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const numbers = ['1', '2' ,'3', '4', '5', '6', '7', '8'];
    const result = [];
    for (let i = 0; i < letters.length; i++) {
      let str = '';
      
      for (let j = 0; j < numbers.length; j++) {
        str += letters[i] + numbers[j];
        result.push(str);
        str = '';
      }
    }
    this.setState({spaceNames: result});
  }

  
  render () {
    let spaces = this.state.spaceNames.map(name => (
      <Space
        key={name}
        name={name}
      />
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
    
  }
}

const mapDispatchToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
