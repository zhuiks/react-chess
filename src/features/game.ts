import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_SET, isWhitePiece } from './board'
import { BoardState, BPType, GameColor, Move, MoveStart } from './types'
import canMove from './can-move'

export interface GameState {
  set: BoardState
  turn: GameColor
  moveOptions: BPType[]
}

// const set: BoardState = {
//   a2: '♔',
//   e4: '♞',
// }
const initialState: GameState ={
  set: INITIAL_SET as BoardState,
  turn: GameColor.White,
  moveOptions: [],
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    move(state, action: PayloadAction<Move>) {
      const {piece, from, to } = action.payload
      state.moveOptions = []
      if (piece !== null && to !== from) {
        state.set[from] = null
        state.set[to] = piece
        state.turn = isWhitePiece(piece) ? GameColor.Black : GameColor.White
      }
    },
    moveStart(state, action: PayloadAction<MoveStart>) {
      const {piece, from} = action.payload
      state.moveOptions = canMove(piece, from, state.set)
    },
  }
})

export const { move, moveStart } = gameSlice.actions
export default gameSlice.reducer