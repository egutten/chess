import * as types from './types';
import { findActiveSpace, updateObject, checkRules, preventLeapFrogging, movePiece } from '../shared/helperFunctions';

export const initialState = {
  board: [
    {name: 'A1', piece: 'rook1W'},
    {name: 'A2', piece: 'knight1W'},
    {name: 'A3', piece: 'bishop1W'},
    {name: 'A4', piece: 'king1W'},
    {name: 'A5', piece: 'queen1W'},
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
    {name: 'H4', piece: 'king1B'},
    {name: 'H5', piece: 'queen1B'},
    {name: 'H6', piece: 'bishop2B'},
    {name: 'H7', piece: 'knight2B'},
    {name: 'H8', piece: 'rook2B'}
  ],
  activeSpace: null,
  activePiece: null,
  captured: [],
  userMessage: ''
}

const activatePiece = (state, action) => {
  return updateObject(state, {
    activePiece: action.piece,
    activeSpace: findActiveSpace(state.board, action.piece),
  });
}

const chooseSpace = (state, action) => {
  // if (!preventLeapFrogging(state.board, state.activeSpace, action.name, state.activePiece)) {
  //   return updateObject(state, {
  //     userMessage: 'You can\'t leap over other pieces!',
  //     activeSpace: null,
  //     activePiece: null
  //   });
  // }
  // check that the move is allowed by the rules
  if (!checkRules(state.activePiece, state.activeSpace, action.name)) {
    return updateObject(state, {
      userMessage: 'You can\'t move there!',
      activeSpace: null,
      activePiece: null
    });
  } else {
    return updateObject(state, {
      board: movePiece(state.board, state.activePiece, state.activeSpace, action.name),
      activePiece: null,
      activeSpace: null,
      userMessage: ''
    })
  }  
}

const capturePiece = (state, action) => {
  const newSpace = findActiveSpace(state.board, action.piece);
  // if (!preventLeapFrogging(state.board, state.activeSpace, newSpace, state.activePiece)) {
  //   return updateObject(state, {
  //     userMessage: 'You can\'t leap over other pieces!',
  //     activeSpace: null,
  //     activePiece: null
  //   });
  // }
  // check that the move is allowed by the rules
  if (!checkRules(state.activePiece, state.activeSpace, newSpace)) {
    return updateObject(state, {
      userMessage: 'You can\'t move there!',
      activeSpace: null,
      activePiece: null
    });
  } else { 
    return updateObject(state, {
      board: movePiece(state.board, state.activePiece, state.activeSpace, newSpace),
      activePiece: null,
      activeSpace: null,
      captured: state.captured.concat(action.piece),
      userMessage: ''
    })
  }  
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
