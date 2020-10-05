import { configureStore } from '@reduxjs/toolkit'
import playReducer from './features/play'

export default configureStore({
  reducer: {
    play: playReducer,
  },
})
