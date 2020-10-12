export const HORIZONTALS = ['1', '2', '3', '4', '5', '6', '7', '8'] as const
export const VERITCALS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const
export type Horizontals = typeof HORIZONTALS[number]
export type Verticals = typeof VERITCALS[number]

export enum BP {
  a1, b1, c1, d1, e1, f1, g1, h1,
  a2, b2, c2, d2, e2, f2, g2, h2,
  a3, b3, c3, d3, e3, f3, g3, h3,
  a4, b4, c4, d4, e4, f4, g4, h4,
  a5, b5, c5, d5, e5, f5, g5, h5,
  a6, b6, c6, d6, e6, f6, g6, h6,
  a7, b7, c7, d7, e7, f7, g7, h7,
  a8, b8, c8, d8, e8, f8, g8, h8,
}

export type BPType = 'a1' | 'b1' | 'c1' | 'd1' | 'e1' | 'f1' | 'g1' | 'h1' |
  'a2' | 'b2' | 'c2' | 'd2' | 'e2' | 'f2' | 'g2' | 'h2' |
  'a3' | 'b3' | 'c3' | 'd3' | 'e3' | 'f3' | 'g3' | 'h3' |
  'a4' | 'b4' | 'c4' | 'd4' | 'e4' | 'f4' | 'g4' | 'h4' |
  'a5' | 'b5' | 'c5' | 'd5' | 'e5' | 'f5' | 'g5' | 'h5' |
  'a6' | 'b6' | 'c6' | 'd6' | 'e6' | 'f6' | 'g6' | 'h6' |
  'a7' | 'b7' | 'c7' | 'd7' | 'e7' | 'f7' | 'g7' | 'h7' |
  'a8' | 'b8' | 'c8' | 'd8' | 'e8' | 'f8' | 'g8' | 'h8' 

export const WHITE_PIECES = ['♖', '♘', '♗', '♕', '♔', '♙'] as const 
export const BLACK_PIECES = ['♜', '♞', '♝', '♛', '♚', '♟︎'] as const
type WhitePiece = typeof WHITE_PIECES[number]
type BlackPiece = typeof BLACK_PIECES[number]

export type SquareStateType = WhitePiece | BlackPiece | null

export type BoardState = Partial<Record <BPType, SquareStateType>>

export interface MoveStart {
  piece: WhitePiece | BlackPiece
  from: BPType
}
export interface Move extends MoveStart {
  to: BPType
}

export enum SquareColor {
  White = 'white',
  Black = 'black',
}

export const DragTypes = {
  'PIECE': 'piece'
}