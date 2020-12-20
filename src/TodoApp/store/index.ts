import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../reducers/todosSlice'

export type RootState = ReturnType<typeof store.getState>

function saveToLocalStorage(state: RootState) {
   try {
      localStorage.setItem('todoAppData', JSON.stringify(state))
   } catch (e) {
      console.warn(e)
   }
}

function loadFromLocalStorage() {
   try {
      const todoAppData = localStorage.getItem('todoAppData')
      if (todoAppData === null) return undefined
      return JSON.parse(todoAppData)
   } catch (e) {
      console.warn(e)
      return undefined
   }
}

export const store = configureStore({
   reducer: { todoAppData: todosReducer },
   preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))
