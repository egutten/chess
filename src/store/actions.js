import * as types from './types';

export const activatePiece = (piece) => {
  return {
    type: types.ACTIVATE_PIECE,
    piece: piece
  };
};

export const chooseSpace = (name) => {
  return {
    type: types.CHOOSE_SPACE,
    name: name
  }
}

export const capturePiece = (piece) => {
  return {
    type: types.CAPTURE_PIECE,
    piece: piece
  }
}
