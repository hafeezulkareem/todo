import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../reducers/todosSlice'

export const store = configureStore({ reducer: { todoAppData: todosReducer } })

export type RootState = ReturnType<typeof store.getState>
