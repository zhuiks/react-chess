import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons'
import { useDrag } from 'react-dnd'
import { DragTypes, SquareColor, SquareStateType, WHITE_PIECES } from '../features/types'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const WHITE = '#fbfae0'
const BLACK = '#271f27'

interface PieceStyleProps {
  bgColor: SquareColor
  isDragging: boolean
}
const ThePiece = styled.div<PieceStyleProps>`
  filter: ${({ isDragging }) => isDragging ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ isDragging }) => isDragging ? '1' : '12'}px ${({ bgColor }) =>
  bgColor === SquareColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'})
`

interface PieceProps { 
  kind: SquareStateType
  bgColor: SquareColor
}

const Piece: React.FC<PieceProps> = ({ kind, bgColor }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: DragTypes.PIECE },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  let piece: IconProp
  switch (kind) {
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
    default:
      return null
  }
  return <ThePiece ref={drag} isDragging={isDragging} bgColor={bgColor}>
    <FontAwesomeIcon
      icon={piece}
      color={WHITE_PIECES.some(p => p === kind) ? WHITE : BLACK}
      flip="vertical"
      size="4x"
    />
  </ThePiece>

}
export default Piece