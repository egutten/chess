import * as React from 'react'
import { shallow } from 'enzyme'
import Piece from './Piece'


describe('<Piece />', () => {
  const mockProps = {
    team: 'W',
    type: 'pawn1'
  }
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Piece {...mockProps}/>)
  });
  
  it('renders without crashing', () => {
    shallow(<Piece {...mockProps}/>)
  })
})
