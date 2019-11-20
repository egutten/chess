import * as types from './types';
import { updateObject } from '../shared/utility'

const initialState = {
  whitePieces: {
    pawn1: {
      position: 'B1',
      rules: []
    },
    pawn2: {
      position: 'B2',
      rules: []
    },
    pawn3: {
      position: 'B3',
      rules: []
    },
    pawn4: {
      position: 'B4',
      rules: []
    },
    pawn5: {
      position: 'B5',
      rules: []
    },
    pawn6: {
      position: 'B6',
      rules: []
    },
    pawn7: {
      position: 'B7',
      rules: []
    },
    pawn8: {
      position: 'B8',
      rules: []
    },
    rook1: {
      position: 'A1',
      rules: []
    },
    rook2: {
      position: 'A8',
      rules: []
    },
    knight1: {
      position: 'A2',
      rules: []
    },
    knight2: {
      position: 'A7',
      rules: []
    },
    bishop1: {
      position: 'A3',
      rules: []
    },
    bishop2: {
      position: 'A6',
      rules: []
    },
    king: {
      position: 'A4',
      rules: []
    },
    queen: {
      position: 'A5',
      rules: []
    },
  },
  blackPieces: {
    pawn1: {
      position: 'G1',
      rules: []
    },
    pawn2: {
      position: 'G2',
      rules: []
    },
    pawn3: {
      position: 'G3',
      rules: []
    },
    pawn4: {
      position: 'G4',
      rules: []
    },
    pawn5: {
      position: 'G5',
      rules: []
    },
    pawn6: {
      position: 'G6',
      rules: []
    },
    pawn7: {
      position: 'G7',
      rules: []
    },
    pawn8: {
      position: 'G8',
      rules: []
    },
    rook1: {
      position: 'H1',
      rules: []
    },
    rook2: {
      position: 'H8',
      rules: []
    },
    knight1: {
      position: 'H2',
      rules: []
    },
    knight2: {
      position: 'H7',
      rules: []
    },
    bishop1: {
      position: 'H3',
      rules: []
    },
    bishop2: {
      position: 'H6',
      rules: []
    },
    king: {
      position: 'H4',
      rules: []
    },
    queen: {
      position: 'H5',
      rules: []
    },
  },
  whereTo: null,
  activePiece: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    
  }
}

export default reducer;
