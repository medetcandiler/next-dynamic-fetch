import { configureStore } from '@reduxjs/toolkit'

import nameReducer from './features/nameSlice'

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
})