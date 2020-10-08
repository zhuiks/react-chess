import React, { DragEvent } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons'
import { RootState } from '../store'
import { BP, BPType, WHITE_PIECES, BLACK_PIECES, SquareColor } from '../features/types'
import { getSquareColor } from '../features/board'
import { dragStart } from '../features/drag'


interface TheSquareProps {
  color: SquareColor
  mooving: boolean
}
const TheSquare = styled.div<TheSquareProps>`
  background-color: ${({ color }) => color === SquareColor.White ? 'white' : '#4e322b'};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    filter: ${({ mooving }) => mooving ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ mooving }) => mooving ? '1' : '12'}px ${({ color }) =>
    color === SquareColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'
  })
  }
`
interface PieceProps {
  color: 'white' | 'black'
}
const ThePiece = styled.div<PieceProps>`
  color: ${({ color }) => color === 'white' ? '#fbfae0' : '#271f27'};
  background: transparent;
  font-size: 4em;
  transform: scaleY(-1);
`
const Square: React.FC<{ pos: BP }> = ({ pos }) => {
  const squareName = BP[pos] as BPType
  const squareValue = useSelector((state: RootState) => state.play[squareName])
  const draggingFrom = useSelector((state: RootState) => state.drag.from)
  const dispatch = useDispatch()
  let piece;
  switch (squareValue) {
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
  const onDragStart = piece ? (
    (event: DragEvent<HTMLDivElement>) => {
      const svg = event.currentTarget.children[0]
      event.dataTransfer.setDragImage(svg, 0, 0)
      dispatch(dragStart({
        from: BP[pos] as BPType,
        piece: squareValue
      }))
    })
    : null

  return (
    <TheSquare color={squareColor} mooving={draggingFrom === BP[pos]}>
      <ThePiece draggable="true" onDragStart={onDragStart} color={WHITE_PIECES.some(p => p === squareValue) ? 'white' : 'black'} >
        {piece &&
          <FontAwesomeIcon icon={piece} />
        }
      </ThePiece>
    </TheSquare>
  )
}

export default Square