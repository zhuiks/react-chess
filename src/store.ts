import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './features/game'
import dragReducer from './features/drag'

const rootReducer = combineReducers({
  game: gameReducer,
  drag: dragReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store