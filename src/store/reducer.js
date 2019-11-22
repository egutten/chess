import * as types from './types';
import { findActiveSpace, updateObject } from '../shared/helperFunctions';

const initialState = {
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
    {name: 'C1'},
    {name: 'C2'},
    {name: 'C3'},
    {name: 'C4'},
    {name: 'C5'},
    {name: 'C6'},
    {name: 'C7'},
    {name: 'C8'},
    {name: 'D1'},
    {name: 'D2'},
    {name: 'D3'},
    {name: 'D4'},
    {name: 'D5'},
    {name: 'D6'},
    {name: 'D7'},
    {name: 'D8'},
    {name: 'E1'},
    {name: 'E2'},
    {name: 'E3'},
    {name: 'E4'},
    {name: 'E5'},
    {name: 'E6'},
    {name: 'E7'},
    {name: 'E8'},
    {name: 'F1'},
    {name: 'F2'},
    {name: 'F3'},
    {name: 'F4'},
    {name: 'F5'},
    {name: 'F6'},
    {name: 'F7'},
    {name: 'F8'},
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
}

const activatePiece = (state, action) => {
  return updateObject(state, {
    activePiece: action.piece,
    activeSpace: findActiveSpace(state.board, action.piece)
  });
}

const chooseSpace = (state, action) => {
  //if state.activePiece is included in the rules
  
  state.board.find((o, i) => {
    //Find the space you want to move to and set the piece to your piece
    if (o.name === action.name) {
      o.piece = state.activePiece;
    }
    //Remove your piece from the space it was in before
    if (o.name === state.activeSpace) {
      o.piece = null;
    }
    return null;
  })
  const newBoard = state.board.slice();  
  return updateObject(state, {
    board: newBoard,
    activePiece: null,
    activeSpace: null
  })
}

const capturePiece = (state, action) => {
  //Find the space of the piece you want to capture
  state.board.find((o, i) => {
    if (o.name === findActiveSpace(state.board, action.piece)){
      //IF YOU ARE ABLE TO MOVE TO THAT SPOT!!!!!
      //Replace your piece in the captured piece's place
      o.piece = state.activePiece
    }
    return null;
  })
  //Find the space you moved from and remove the piece
  state.board.find((o, i) => {
    if (o.name === state.activeSpace) {
      o.piece = null;
    }
    return null;
  })
  const newBoard = state.board.slice();  
  return updateObject(state, {
    board: newBoard,
    activePiece: null,
    activeSpace: null,
    captured: state.captured.concat(action.piece)
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ACTIVATE_PIECE: return activatePiece(state, action);
    case types.CHOOSE_SPACE: return chooseSpace(state, action);
    case types.CAPTURE_PIECE: return capturePiece(state, action);
  default:
      return state 
  }
};

export default reducer;
