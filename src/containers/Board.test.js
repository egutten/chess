import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Board } from './Board';

describe('<Board />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Board />)
  });
  
  it('renders without crashing', () => {
    shallow(<Board />)
  })
  
  it('should generate spaces on mounting', () => {
    const space = wrapper.find('space');
    
    expect(space.length).toEqual(64);
    expect(wrapper.state().spaceNames).toHaveLength(64);
  })

})
