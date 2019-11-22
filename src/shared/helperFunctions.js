import React from 'react';
import Piece from '../components/Piece';

export const colorSpaces = (name) => {
  const identifier = name.split('')
  const letter = identifier[0];
  const number = identifier[1];
  const letterCheck = ['A', 'C', 'E', 'G'];

  if (letterCheck.includes(letter) && number % 2 === 0) {
    return 'grey';
  } 
  
  if (!letterCheck.includes(letter) && number % 2 !== 0) {
    return 'grey';
  }
}

export const placePiece = (piece) => {
  const type = piece.slice(0, piece.length - 1);
  const team = piece.slice(piece.length - 1);

  return <Piece type={type} team={team}/>
}

export const colorPieceBody = (team) => {
  if (team === 'B') {
    return 'black';
  } else if (team === 'W') {
    return 'white';
  }
}

export const colorPieceText = (team) => {
  if (team === 'B') {
    return 'white';
  } else {
    return;
  }
}
