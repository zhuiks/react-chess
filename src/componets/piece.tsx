import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing, faChessQueen, faChessRook, faChessBishop, faChessKnight, faChessPawn } from '@fortawesome/free-solid-svg-icons'
import { SquareStateType, WHITE_PIECES } from '../features/types'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const WHITE = '#fbfae0'
const BLACK = '#271f27'

const Piece: React.FC<{ kind: SquareStateType }> = ({ kind }) => {
  let piece: IconProp;
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
  return <FontAwesomeIcon
    icon={piece}
    color={WHITE_PIECES.some(p => p === kind) ? WHITE : BLACK}
    flip="vertical"
    size="4x"
  />
}
export default Piece