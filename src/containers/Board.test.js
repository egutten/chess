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
  });

})
