import * as React from 'react';
import { mount } from 'enzyme';
import Board from './Board';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import reducer, { initialState } from '../store/reducer';
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
  
  it('dispatches the correct action after clicking a piece to move it', () => {
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
  
  it('dispatches the correct action after clicking a piece to capture it', () => {
    store = mockStore({ 
      board: [
        {name: 'A1', piece: 'rook1W'},
        {name: 'A2', piece: 'knight1W'},
        {name: 'A3', piece: 'bishop1W'},
        {name: 'A4', piece: 'kingW'},
        {name: 'A5', piece: 'queenW'},
        {name: 'A6', piece: 'bishop2W'},
        {name: 'A7', piece: 'knight2W'},
        {name: 'A8', piece: 'rook2W'},
        {name: 'B1', piece: 'pawn1W'},
        {name: 'B2', piece: 'pawn2W'},
        {name: 'B3', piece: 'pawn3W'},
        {name: 'B4', piece: 'pawn4W'},
        {name: 'B5', piece: 'pawn5W'},
        {name: 'B6', piece: 'pawn6W'},
        {name: 'B7', piece: 'pawn7W'},
        {name: 'B8', piece: 'pawn8W'},
        {name: 'C1', piece: null},
        {name: 'C2', piece: null},
        {name: 'C3', piece: null},
        {name: 'C4', piece: null},
        {name: 'C5', piece: null},
        {name: 'C6', piece: null},
        {name: 'C7', piece: null},
        {name: 'C8', piece: null},
        {name: 'D1', piece: null},
        {name: 'D2', piece: null},
        {name: 'D3', piece: null},
        {name: 'D4', piece: null},
        {name: 'D5', piece: null},
        {name: 'D6', piece: null},
        {name: 'D7', piece: null},
        {name: 'D8', piece: null},
        {name: 'E1', piece: null},
        {name: 'E2', piece: null},
        {name: 'E3', piece: null},
        {name: 'E4', piece: null},
        {name: 'E5', piece: null},
        {name: 'E6', piece: null},
        {name: 'E7', piece: null},
        {name: 'E8', piece: null},
        {name: 'F1', piece: null},
        {name: 'F2', piece: null},
        {name: 'F3', piece: null},
        {name: 'F4', piece: null},
        {name: 'F5', piece: null},
        {name: 'F6', piece: null},
        {name: 'F7', piece: null},
        {name: 'F8', piece: null},
        {name: 'G1', piece: 'pawn1B'},
        {name: 'G2', piece: 'pawn2B'},
        {name: 'G3', piece: 'pawn3B'},
        {name: 'G4', piece: 'pawn4B'},
        {name: 'G5', piece: 'pawn5B'},
        {name: 'G6', piece: 'pawn6B'},
        {name: 'G7', piece: 'pawn7B'},
        {name: 'G8', piece: 'pawn8B'},
        {name: 'H1', piece: 'rook1B'},
        {name: 'H2', piece: 'knight1B'},
        {name: 'H3', piece: 'bishop1B'},
        {name: 'H4', piece: 'kingB'},
        {name: 'H5', piece: 'queenB'},
        {name: 'H6', piece: 'bishop2B'},
        {name: 'H7', piece: 'knight2B'},
        {name: 'H8', piece: 'rook2B'}
      ],
      activeSpace: 'A1',
      activePiece: 'rook1W',
      captured: []
    });
    
    wrapper = mount(
      <Provider store={store}>
        <Board />
      </Provider>
    );
  
    const piece = wrapper.find('piece').at(1);
    piece.simulate('click')
  
    const expectedActions = [
      { type: 'CAPTURE_PIECE', piece: 'knight1W'}
    ]
  
    expect(store.getActions()).toEqual(expectedActions);  
  })
  
  it('correctly changes state after a piece has been activated', () => {
      const action = { type: 'ACTIVATE_PIECE', piece: 'rook1W'};
      const expectedState = { 
        board: [
          {name: 'A1', piece: 'rook1W'},
          {name: 'A2', piece: 'knight1W'},
          {name: 'A3', piece: 'bishop1W'},
          {name: 'A4', piece: 'kingW'},
          {name: 'A5', piece: 'queenW'},
          {name: 'A6', piece: 'bishop2W'},
          {name: 'A7', piece: 'knight2W'},
          {name: 'A8', piece: 'rook2W'},
          {name: 'B1', piece: 'pawn1W'},
          {name: 'B2', piece: 'pawn2W'},
          {name: 'B3', piece: 'pawn3W'},
          {name: 'B4', piece: 'pawn4W'},
          {name: 'B5', piece: 'pawn5W'},
          {name: 'B6', piece: 'pawn6W'},
          {name: 'B7', piece: 'pawn7W'},
          {name: 'B8', piece: 'pawn8W'},
          {name: 'C1', piece: null},
          {name: 'C2', piece: null},
          {name: 'C3', piece: null},
          {name: 'C4', piece: null},
          {name: 'C5', piece: null},
          {name: 'C6', piece: null},
          {name: 'C7', piece: null},
          {name: 'C8', piece: null},
          {name: 'D1', piece: null},
          {name: 'D2', piece: null},
          {name: 'D3', piece: null},
          {name: 'D4', piece: null},
          {name: 'D5', piece: null},
          {name: 'D6', piece: null},
          {name: 'D7', piece: null},
          {name: 'D8', piece: null},
          {name: 'E1', piece: null},
          {name: 'E2', piece: null},
          {name: 'E3', piece: null},
          {name: 'E4', piece: null},
          {name: 'E5', piece: null},
          {name: 'E6', piece: null},
          {name: 'E7', piece: null},
          {name: 'E8', piece: null},
          {name: 'F1', piece: null},
          {name: 'F2', piece: null},
          {name: 'F3', piece: null},
          {name: 'F4', piece: null},
          {name: 'F5', piece: null},
          {name: 'F6', piece: null},
          {name: 'F7', piece: null},
          {name: 'F8', piece: null},
          {name: 'G1', piece: 'pawn1B'},
          {name: 'G2', piece: 'pawn2B'},
          {name: 'G3', piece: 'pawn3B'},
          {name: 'G4', piece: 'pawn4B'},
          {name: 'G5', piece: 'pawn5B'},
          {name: 'G6', piece: 'pawn6B'},
          {name: 'G7', piece: 'pawn7B'},
          {name: 'G8', piece: 'pawn8B'},
          {name: 'H1', piece: 'rook1B'},
          {name: 'H2', piece: 'knight1B'},
          {name: 'H3', piece: 'bishop1B'},
          {name: 'H4', piece: 'kingB'},
          {name: 'H5', piece: 'queenB'},
          {name: 'H6', piece: 'bishop2B'},
          {name: 'H7', piece: 'knight2B'},
          {name: 'H8', piece: 'rook2B'}
        ],
        activeSpace: 'A1',
        activePiece: 'rook1W',
        captured: []
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
  })
  
  it('correctly changes state after a piece has been moved to another space', async() => {
      const state = (reducer(undefined, { type: 'ACTIVATE_PIECE', piece: 'rook1W'}));
      const action = { type: 'CHOOSE_SPACE', name: 'C1'};
      const expectedState = { 
        board: [
          {name: 'A1', piece: null},
          {name: 'A2', piece: 'knight1W'},
          {name: 'A3', piece: 'bishop1W'},
          {name: 'A4', piece: 'kingW'},
          {name: 'A5', piece: 'queenW'},
          {name: 'A6', piece: 'bishop2W'},
          {name: 'A7', piece: 'knight2W'},
          {name: 'A8', piece: 'rook2W'},
          {name: 'B1', piece: 'pawn1W'},
          {name: 'B2', piece: 'pawn2W'},
          {name: 'B3', piece: 'pawn3W'},
          {name: 'B4', piece: 'pawn4W'},
          {name: 'B5', piece: 'pawn5W'},
          {name: 'B6', piece: 'pawn6W'},
          {name: 'B7', piece: 'pawn7W'},
          {name: 'B8', piece: 'pawn8W'},
          {name: 'C1', piece: 'rook1W'},
          {name: 'C2', piece: null},
          {name: 'C3', piece: null},
          {name: 'C4', piece: null},
          {name: 'C5', piece: null},
          {name: 'C6', piece: null},
          {name: 'C7', piece: null},
          {name: 'C8', piece: null},
          {name: 'D1', piece: null},
          {name: 'D2', piece: null},
          {name: 'D3', piece: null},
          {name: 'D4', piece: null},
          {name: 'D5', piece: null},
          {name: 'D6', piece: null},
          {name: 'D7', piece: null},
          {name: 'D8', piece: null},
          {name: 'E1', piece: null},
          {name: 'E2', piece: null},
          {name: 'E3', piece: null},
          {name: 'E4', piece: null},
          {name: 'E5', piece: null},
          {name: 'E6', piece: null},
          {name: 'E7', piece: null},
          {name: 'E8', piece: null},
          {name: 'F1', piece: null},
          {name: 'F2', piece: null},
          {name: 'F3', piece: null},
          {name: 'F4', piece: null},
          {name: 'F5', piece: null},
          {name: 'F6', piece: null},
          {name: 'F7', piece: null},
          {name: 'F8', piece: null},
          {name: 'G1', piece: 'pawn1B'},
          {name: 'G2', piece: 'pawn2B'},
          {name: 'G3', piece: 'pawn3B'},
          {name: 'G4', piece: 'pawn4B'},
          {name: 'G5', piece: 'pawn5B'},
          {name: 'G6', piece: 'pawn6B'},
          {name: 'G7', piece: 'pawn7B'},
          {name: 'G8', piece: 'pawn8B'},
          {name: 'H1', piece: 'rook1B'},
          {name: 'H2', piece: 'knight1B'},
          {name: 'H3', piece: 'bishop1B'},
          {name: 'H4', piece: 'kingB'},
          {name: 'H5', piece: 'queenB'},
          {name: 'H6', piece: 'bishop2B'},
          {name: 'H7', piece: 'knight2B'},
          {name: 'H8', piece: 'rook2B'}
        ],
        activeSpace: null,
        activePiece: null,
        captured: []
      };

      expect(reducer(state, action)).toEqual(expectedState);
  })
  
  it('correctly changes state after a piece has been captured', async() => {
      const state = (reducer(undefined, { type: 'ACTIVATE_PIECE', piece: 'rook1W'}));
      const action = { type: 'CAPTURE_PIECE', piece: 'knight1W'};
      const expectedState = { 
        board: [
          {name: 'A1', piece: null},
          {name: 'A2', piece: 'rook1W'},
          {name: 'A3', piece: 'bishop1W'},
          {name: 'A4', piece: 'kingW'},
          {name: 'A5', piece: 'queenW'},
          {name: 'A6', piece: 'bishop2W'},
          {name: 'A7', piece: 'knight2W'},
          {name: 'A8', piece: 'rook2W'},
          {name: 'B1', piece: 'pawn1W'},
          {name: 'B2', piece: 'pawn2W'},
          {name: 'B3', piece: 'pawn3W'},
          {name: 'B4', piece: 'pawn4W'},
          {name: 'B5', piece: 'pawn5W'},
          {name: 'B6', piece: 'pawn6W'},
          {name: 'B7', piece: 'pawn7W'},
          {name: 'B8', piece: 'pawn8W'},
          {name: 'C1', piece: null},
          {name: 'C2', piece: null},
          {name: 'C3', piece: null},
          {name: 'C4', piece: null},
          {name: 'C5', piece: null},
          {name: 'C6', piece: null},
          {name: 'C7', piece: null},
          {name: 'C8', piece: null},
          {name: 'D1', piece: null},
          {name: 'D2', piece: null},
          {name: 'D3', piece: null},
          {name: 'D4', piece: null},
          {name: 'D5', piece: null},
          {name: 'D6', piece: null},
          {name: 'D7', piece: null},
          {name: 'D8', piece: null},
          {name: 'E1', piece: null},
          {name: 'E2', piece: null},
          {name: 'E3', piece: null},
          {name: 'E4', piece: null},
          {name: 'E5', piece: null},
          {name: 'E6', piece: null},
          {name: 'E7', piece: null},
          {name: 'E8', piece: null},
          {name: 'F1', piece: null},
          {name: 'F2', piece: null},
          {name: 'F3', piece: null},
          {name: 'F4', piece: null},
          {name: 'F5', piece: null},
          {name: 'F6', piece: null},
          {name: 'F7', piece: null},
          {name: 'F8', piece: null},
          {name: 'G1', piece: 'pawn1B'},
          {name: 'G2', piece: 'pawn2B'},
          {name: 'G3', piece: 'pawn3B'},
          {name: 'G4', piece: 'pawn4B'},
          {name: 'G5', piece: 'pawn5B'},
          {name: 'G6', piece: 'pawn6B'},
          {name: 'G7', piece: 'pawn7B'},
          {name: 'G8', piece: 'pawn8B'},
          {name: 'H1', piece: 'rook1B'},
          {name: 'H2', piece: 'knight1B'},
          {name: 'H3', piece: 'bishop1B'},
          {name: 'H4', piece: 'kingB'},
          {name: 'H5', piece: 'queenB'},
          {name: 'H6', piece: 'bishop2B'},
          {name: 'H7', piece: 'knight2B'},
          {name: 'H8', piece: 'rook2B'}
        ],
        activeSpace: null,
        activePiece: null,
        captured: ['knight1W']
      };

      expect(reducer(state, action)).toEqual(expectedState);
  })

  

})
