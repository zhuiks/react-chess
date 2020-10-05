import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import playReducer from './features/play'

const rootReducer = combineReducers({
  play: playReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store