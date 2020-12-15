import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { TodoType } from '../types'

interface TodosState {
   todos: Array<TodoType>
}

const initialState: TodosState = {
   todos: []
}

const todosSlice = createSlice({
   name: 'todos',
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
      }
   }
})

export const { initTodosState, addTodo, deleteTodo } = todosSlice.actions

export const todos = (state: RootState): Array<TodoType> => state.todos.todos

export default todosSlice.reducer
