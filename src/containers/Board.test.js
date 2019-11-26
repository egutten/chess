import * as React from 'react';
import { mount } from 'enzyme';
import Board from './Board';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { reducer, initialState } from '../store/reducer';
import * as actions from '../store/actions';

const mockStore = configureStore();

describe('<Board />', () => {
  let store;
  let wrapper;
  
  beforeEach(() => {
    store = mockStore(initialState);
    
    wrapper = mount(
      <Provider store={store}>
        <Board />
      </Provider>
    );
  });
  
  it('renders without crashing', () => {
    wrapper;
  });
  
  it('dispatches the correct action after clicking a piece', () => {
    const piece = wrapper.find('piece').at(0);
    piece.simulate('click')
    
    const expectedActions = [
      { type: 'ACTIVATE_PIECE', piece: 'rook1W'}
    ]
    
    expect(store.getActions()).toEqual(expectedActions);  
  });
  
  it('dispatches the correct action after clicking a space', () => {
    const space = wrapper.find('space').at(0);
    space.simulate('click');
    
    const expectedActions = [
      { type: 'CHOOSE_SPACE', name: 'A1'}
    ]
    
    expect(store.getActions()).toEqual(expectedActions);  
  });
  

})
