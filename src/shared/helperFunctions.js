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
    return 'black';
  }
}

export const findActiveSpace = (board, piece) => {
  for (let obj of board) {
    if (obj.piece === piece) {
      return obj.name;
    }
  }
}

export const movePiece = (board, activePiece, activeSpace, newSpace) => {
  const newBoard = board.slice();
  for (let obj of newBoard) {
    //Find the space you want to move to and set the piece to your piece
    if (obj.name === newSpace) {
      obj.piece = activePiece;
    }
    //Remove your piece from the space it was in before
    if (obj.name === activeSpace) {
      obj.piece = null;
    }
  }
  return newBoard; 
}

export const preventLeapFrogging = (board, thisSpace, nextSpace, pieceType) => {
  let start;
  let end;
  const path = [];
  
  for (let obj of board) {
    if (obj.name === thisSpace) {
      start = obj;
    }
  }
  
  for (let obj of board) {
    if (obj.name === nextSpace) {
      end = obj;
    }
  }
  
  if (board.indexOf(start) > board.indexOf(end)) {
    for (let i = board.indexOf(start); i >= board.indexOf(end); i--) {
      if (checkRules(pieceType, thisSpace, board[i].name)) {
        console.log(board[i]);
        path.push(board[i]);
      }
    }
  }
  
  if (board.indexOf(start) < board.indexOf(end)) {
    for (let i = board.indexOf(start); i < board.indexOf(end); i++) {
      if (checkRules(pieceType, thisSpace, board[i].name)) {
        path.push(board[i]);
      }
    }
  }
  
  if (path.length) {
    for (let i = 1; i < path.length; i++) {
      if (path[i].piece !== null) {
        return false;
      }
    }
  }
  return true;
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
  } else if (type === 'rook') {
    if ((currentSpace.letterCode === newSpace.letterCode) && 
        (newSpace.number >=1 && newSpace.number <= 8)) {
      return true;
    }
    if ((currentSpace.letterCode !== newSpace.letterCode) &&
        (currentSpace.number === newSpace.number)) {
          return true;
    }
    return false;
  } else if (type === 'bishop') {
    if (currentSpace.letterCode === newSpace.letterCode) {
      return false;
    }    
    if (Math.abs(currentSpace.letterCode - newSpace.letterCode) !== Math.abs(currentSpace.number - newSpace.number)) {
      return false;
    }    
    if (currentSpace.number === newSpace.number) {
      return false;
    }
    return true;
  }
}

const processSpace = (space) => {
  const identifier = space.split('')
  const result = {
      letterCode: identifier[0].charCodeAt(0),
      number: identifier[1]
    }
  return result;
}
