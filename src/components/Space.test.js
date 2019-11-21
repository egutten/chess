import * as React from 'react'
import { shallow } from 'enzyme'
import Space from './Space'


describe('<Space />', () => {
  const mockProps = {
    name: 'A1',
    piece: 'pawn1'
  }
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Space {...mockProps}/>)
  });
  
  it('renders without crashing', () => {
    shallow(<Space {...mockProps}/>)
  })
})
