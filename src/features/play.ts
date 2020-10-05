import { createSlice } from '@reduxjs/toolkit'
import { BoardState, INITIAL_SET } from './board'
// const setTheBoard = ()
// const initialState: SquareStateType[][] = 


const playSlice = createSlice({
  name: 'play',
  initialState: INITIAL_SET as BoardState,
  reducers: {}
})

export default playSlice.reducer