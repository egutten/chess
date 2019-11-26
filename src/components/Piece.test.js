import * as React from 'react';
import { mount } from 'enzyme';
import Piece from './Piece';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { reducer } from '../store/reducer';

const mockStore = configureStore();

describe('<Piece />', () => {
  let store;
  let component;
  let wrapper;
  
  const mockProps = {
    clicked: jest.fn(),
    type: 'pawn1'
  }
  
  beforeEach(() => {
    store = mockStore({
      activePiece: null
    })
    
    wrapper = mount(
      <Provider store={store}>
        <Piece {...mockProps}/>
      </Provider>
    );
  });
  
  it('renders without crashing', () => {
    wrapper
  });
  
  it('should call a function when clicked', () => {
    const piece = wrapper.find('piece');
    piece.simulate('click');
    expect(mockProps.clicked).toHaveBeenCalled();
  })
  
  it('should render with the correct label', () => {
    const label = wrapper.find('p');
    expect(label.text()).toBe('pawn1');
  })

})
