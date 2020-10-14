import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './features/game'

const rootReducer = combineReducers({
  game: gameReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store