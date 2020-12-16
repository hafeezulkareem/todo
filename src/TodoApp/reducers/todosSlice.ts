import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ALL } from '../constants/UIConstants'
import { RootState } from '../store'
import { TodoType } from '../types'

interface TodosState {
   activeTab: string
   todos: Array<TodoType>
}

const initialState: TodosState = {
   activeTab: ALL,
   todos: []
}

const todosSlice = createSlice({
   name: 'todoAppData',
   initialState,
   reducers: {
      initTodosState: (state) => {
         state.todos = []
      },
      addTodo: (state, action: PayloadAction<TodoType>) => {
         state.todos.push(action.payload)
      },
      deleteTodo: (state, action: PayloadAction<string>) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },
      updateActiveTab: (state, action: PayloadAction<string>) => {
         state.activeTab = action.payload
      }
   }
})

export const {
   initTodosState,
   addTodo,
   deleteTodo,
   updateActiveTab
} = todosSlice.actions

export const todos = (state: RootState): Array<TodoType> =>
   state.todoAppData.todos
export const activeTab = (state: RootState): string =>
   state.todoAppData.activeTab

export default todosSlice.reducer
