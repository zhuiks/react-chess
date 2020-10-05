
export type Horizontals = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'
export type Verticals = 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'

export const HORIZONTALS: Horizontals[] = ['1', '2', '3', '4', '5', '6', '7', '8']
export const VERITCALS: Verticals[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


export type SquareStateType = '♖' | '♘' | '♗' | '♕' | '♔' | '♙' | '♜' | '♞' | '♝' | '♛' | '♚' | '♟︎' | null


const INITIAL_PIECES = {
  a1: '♖', b1: '♘', c1: '♗', d1: '♕', e1: '♔', f1: '♗', g1: '♘', h1: '♖',
  a2: '♙', b2: '♙', c2: '♙', d2: '♙', e2: '♙', f2: '♙', g2: '♙', h2: '♙',
  a8: '♜', b8: '♞', c8: '♝', d8: '♛', e8: '♚', f8: '♝', g8: '♞', h8: '♜',
  a7: '♟︎', b7: '♟︎', c7: '♟︎', d7: '♟︎', e7: '♟︎', f7: '♟︎', g7: '♟︎', h7: '♟︎',
}

export enum SquareColor {
  White = 'white',
  Black = 'black',
}

const getHI = (h: Horizontals) => HORIZONTALS.indexOf(h)
const getVI = (v: Verticals) => VERITCALS.indexOf(v) 

export const getSquareColor = (v: Verticals, h: Horizontals): SquareColor => (
  (getHI(h) + getVI(v)) % 2 === 0 ? SquareColor.Black : SquareColor.White
)
