import * as React from 'react'
import { shallow } from 'enzyme'
import Space from './Space'
import { colorSpaces } from '../shared/helperFunctions';


describe('<Space />', () => {
  const mockProps = {
    name: 'A1',
    piece: 'pawn1W',
    spaceClicked: jest.fn()
  }
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Space {...mockProps}/>)
  });
  
  it('renders without crashing', () => {
    wrapper
  })
  
  it('places the piece', () => {
    const piece = wrapper.find('Connect(piece)');
    expect(piece.props().type).toBe('pawn1');
    expect(piece.props().team).toBe('W');
    expect(piece.props().fullName).toBe('pawn1W');
  })
  
  it('calls a function when clicked on', () => {
    wrapper.simulate('click');
    expect(mockProps.spaceClicked).toHaveBeenCalled();
  })
})
