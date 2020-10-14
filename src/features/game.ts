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
      if (action.payload.piece !== null && action.payload.to !== action.payload.from) {
        state.set[action.payload.from] = null
        state.set[action.payload.to] = action.payload.piece
        state.turn = isWhitePiece(action.payload.piece) ? GameColor.Black : GameColor.White
      }
    }
  }
})

export type GameState = ReturnType<typeof gameSlice.reducer>
export const { move } = gameSlice.actions
export default gameSlice.reducer