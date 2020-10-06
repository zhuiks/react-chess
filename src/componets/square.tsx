import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons'
import { RootState } from '../store'
import {BP, BPType, WHITE_PIECES, BLACK_PIECES, SquareColor, getSquareColor} from '../features/board'


const TheSquare = styled.div<{ color: SquareColor }>`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    filter: drop-shadow(1px 1px 4px ${({ color }) => color === SquareColor.White ? 'rgba(0,0,0, 0.7)' : 'rgba(255,255,255, 0.7)'})
  }
`
const ThePiece = styled.div<{ color: 'white' | 'black'}>`
  color: ${({ color }) => color };
  transform: scale(3.5, -3.5);

`
const Square: React.FC<{pos: BP}> = ({ pos }) => {
  const squareName = BP[pos] as BPType
  const squareValue = useSelector((state: RootState) => state.play[squareName])
  let piece;
  switch(squareValue) {
    case '♔':
    case '♚':
      piece = faChessKing
      break
    case '♕':
    case '♛':
      piece = faChessQueen
      break
    case '♖':
    case '♜':
      piece = faChessRook
      break
    case '♗':
    case '♝':
      piece = faChessBishop
      break
    case '♘':
    case '♞':
      piece = faChessKnight
      break
    case '♙':
    case '♟︎':
      piece = faChessPawn
      break                    
  }

  const squareColor = getSquareColor(pos)
  return (
    <TheSquare color={squareColor}>
        <ThePiece color={WHITE_PIECES.some(p => p === squareValue) ? 'white' : 'black'}>
        { piece && 
          <FontAwesomeIcon icon={piece} />
        }
        </ThePiece>
    </TheSquare>
  )
}

export default Square