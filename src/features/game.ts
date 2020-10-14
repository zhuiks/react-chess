import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_SET, isWhitePiece } from './board'
import { BoardState, GameColor, Move } from './types'


const gameSlice = createSlice({
  name: 'game',
  initialState: {
    set: INITIAL_SET as BoardState,
    turn: GameColor.White,
  },
  reducers: {
    move(state, action: PayloadAction<Move>) {
      const {piece, from, to } = action.payload
      if (piece !== null && to !== from) {
        state.set[from] = null
        state.set[to] = piece
        state.turn = isWhitePiece(piece) ? GameColor.Black : GameColor.White
      }
    }
  }
})

export type GameState = ReturnType<typeof gameSlice.reducer>
export const { move } = gameSlice.actions
export default gameSlice.reducer