import React from 'react';
import Piece from '../components/Piece';

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

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

export const placePiece = (piece, func) => {
  if (piece) {
    const type = piece.slice(0, piece.length - 2);
    const team = piece.slice(piece.length - 1);
    return <Piece type={type} team={team} clicked={func} fullName={piece}/>
  }
  return null;
}

export const colorPieceBody = (team, name, state) => {
  if (team === 'B' && name !== state) {
    return 'black';
  } 
  
  if (team === 'W' && name !== state) {
    return 'white';
  } 
  
  if (name === state) {
    return 'yellow';
  }
}

export const colorPieceText = (team) => {
  if (team === 'B') {
    return 'white';
  } else {
    return;
  }
}

export const findActiveSpace = (board, piece) => {
  for (let obj of board) {
    if (obj.piece === piece) {
      return obj.name;
    }
  }
}

export const checkRules = (piece, activeSpace, futureSpace) => {
  const currentSpace = processSpace(activeSpace);
  const newSpace = processSpace(futureSpace);
  const team = piece.slice(piece.length - 1);
  const type = piece.slice(0, piece.length - 2);
  
  if (type === 'pawn') {
    if (currentSpace.number !== newSpace.number) {
      return false;
    }
    if (team === 'B') {
      if (currentSpace.letterCode === 71) {
        return currentSpace.letterCode - 1 === newSpace.letterCode ||
          currentSpace.letterCode - 2 === newSpace.letterCode
      } else {
        return currentSpace.letterCode - 1 === newSpace.letterCode
      }
    } else if (team === 'W'){
      if (currentSpace.letterCode === 66) {
        return currentSpace.letterCode + 1 === newSpace.letterCode ||
          currentSpace.letterCode + 2 === newSpace.letterCode
      } else {
        return currentSpace.letterCode + 1 === newSpace.letterCode
      }    
    }
  }
  // switch (piece) {
  //   case ('pawn'):
  //   //rules
  //   break;
  //   case ('rook'):
  //   //rules 
  //   break;
  //   case ('knight'):
  //   //rules 
  //   break;
  //   case ('bishop'):
  //   //rules 
  //   break;
  //   case ('queen'):
  //   //rules 
  //   break;
  //   case ('king'):
  //   //rules 
  //   break;
  //   default: 
  //     return null;
  // }
}

const processSpace = (space) => {
  const identifier = space.split('')
  const result = {
      letterCode: identifier[0].charCodeAt(0),
      number: identifier[1]
    }
  return result;
}
