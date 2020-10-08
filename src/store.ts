import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import playReducer from './features/play'
import dragReducer from './features/drag'

const rootReducer = combineReducers({
  play: playReducer,
  drag: dragReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store