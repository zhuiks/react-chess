
export type Horizontals = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'
export type Verticals = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'

export const HORIZONTALS: Horizontals[] = ['1', '2', '3', '4', '5', '6', '7', '8']
export const VERITCALS: Verticals[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

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

export type SquareStateType = '♖' | '♘' | '♗' | '♕' | '♔' | '♙' | '♜' | '♞' | '♝' | '♛' | '♚' | '♟︎' | null

export type BoardState = Partial<Record <BPType, SquareStateType>>

export const INITIAL_SET: BoardState = {
  a1: '♖', b1: '♘', c1: '♗', d1: '♕', e1: '♔', f1: '♗', g1: '♘', h1: '♖',
  a2: '♙', b2: '♙', c2: '♙', d2: '♙', e2: '♙', f2: '♙', g2: '♙', h2: '♙',
  a8: '♜', b8: '♞', c8: '♝', d8: '♛', e8: '♚', f8: '♝', g8: '♞', h8: '♜',
  a7: '♟︎', b7: '♟︎', c7: '♟︎', d7: '♟︎', e7: '♟︎', f7: '♟︎', g7: '♟︎', h7: '♟︎',
}

export enum SquareColor {
  White = 'white',
  Black = 'black',
}

const getHI = (pos: BP) => pos % 8
const getVI = (pos: BP) => Math.trunc(pos / 8) 

export const getSquareColor = (pos: BP): SquareColor => (
  (getHI(pos) + getVI(pos)) % 2 === 0 ? SquareColor.Black : SquareColor.White
)
