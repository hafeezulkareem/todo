import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ACTIVE, ALL, COMPLETED } from '../constants/UIConstants'
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
      toggleTodoState: (state, action: PayloadAction<string>) => {
         const todo = state.todos.find((todo) => todo.id === action.payload)
         if (todo) {
            todo.completed = !todo.completed
         }
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
   toggleTodoState,
   deleteTodo,
   updateActiveTab
} = todosSlice.actions

export const todos = (state: RootState): Array<TodoType> => {
   const todos = state.todoAppData.todos
   switch (state.todoAppData.activeTab) {
      case ALL:
         return todos
      case ACTIVE:
         return todos.filter((todo) => !todo.completed)
      case COMPLETED:
         return todos.filter((todo) => todo.completed)
      default:
         return todos
   }
}
export const activeTab = (state: RootState): string =>
   state.todoAppData.activeTab

export default todosSlice.reducer
