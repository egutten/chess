import * as types from './types';
import { updateObject } from '../shared/utility'

const initialState = {
  board: [
    {name: 'A1', piece: 'rookW'},
    {name: 'A2', piece: 'knightW'},
    {name: 'A3', piece: 'bishopW'},
    {name: 'A4', piece: 'kingW'},
    {name: 'A5', piece: 'queenW'},
    {name: 'A6', piece: 'bishopW'},
    {name: 'A7', piece: 'knightW'},
    {name: 'A8', piece: 'rookW'},
    {name: 'B1', piece: 'pawnW'},
    {name: 'B2', piece: 'pawnW'},
    {name: 'B3', piece: 'pawnW'},
    {name: 'B4', piece: 'pawnW'},
    {name: 'B5', piece: 'pawnW'},
    {name: 'B6', piece: 'pawnW'},
    {name: 'B7', piece: 'pawnW'},
    {name: 'B8', piece: 'pawnW'},
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
    {name: 'G1', piece: 'pawnB'},
    {name: 'G2', piece: 'pawnB'},
    {name: 'G3', piece: 'pawnB'},
    {name: 'G4', piece: 'pawnB'},
    {name: 'G5', piece: 'pawnB'},
    {name: 'G6', piece: 'pawnB'},
    {name: 'G7', piece: 'pawnB'},
    {name: 'G8', piece: 'pawnB'},
    {name: 'H1', piece: 'rookB'},
    {name: 'H2', piece: 'knightB'},
    {name: 'H3', piece: 'bishopB'},
    {name: 'H4', piece: 'kingB'},
    {name: 'H5', piece: 'queenB'},
    {name: 'H6', piece: 'bishopB'},
    {name: 'H7', piece: 'knightB'},
    {name: 'H8', piece: 'rookB'}
  ],
  rules: {
    pawn: [],
    rook: [],
    knight: [],
    bishop: [],
    king: [],
    queen: []
  },
  whereTo: null,
  activePiece: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
  default:
      return state 
  }
};

export default reducer;
