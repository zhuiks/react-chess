import piece from '../componets/piece'
import { BLACK_PIECES, BoardState, BP, BPType, GameColor, SquareStateType, WHITE_PIECES } from './types'


export const INITIAL_SET: BoardState = {
  a1: '♖', b1: '♘', c1: '♗', d1: '♕', e1: '♔', f1: '♗', g1: '♘', h1: '♖',
  a2: '♙', b2: '♙', c2: '♙', d2: '♙', e2: '♙', f2: '♙', g2: '♙', h2: '♙',
  a8: '♜', b8: '♞', c8: '♝', d8: '♛', e8: '♚', f8: '♝', g8: '♞', h8: '♜',
  a7: '♟︎', b7: '♟︎', c7: '♟︎', d7: '♟︎', e7: '♟︎', f7: '♟︎', g7: '♟︎', h7: '♟︎',
}

export const getVI = (pos: BPType) => BP[pos] % 8
export const getHI = (pos: BPType) => Math.trunc(BP[pos] / 8) 

export const getSquareColor = (pos: BPType): GameColor => (
  (getHI(pos) + getVI(pos)) % 2 === 0 ? GameColor.Black : GameColor.White
)

export const isWhitePiece = (piece: SquareStateType) => WHITE_PIECES.some(p => p === piece)

export const getPieceColor = (piece: SquareStateType) => WHITE_PIECES.some(p => p === piece) ? GameColor.White : BLACK_PIECES.some(p => p === piece) ? GameColor.Black : undefined
