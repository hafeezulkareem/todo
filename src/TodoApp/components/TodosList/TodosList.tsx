import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { todos } from '../../reducers/todosSlice'

import Todo from '../Todo'

import { TodosContainer } from './styledComponents'

const TodosList = (): ReactElement => {
   const todoItems = useSelector(todos)

   return (
      <TodosContainer>
         {todoItems.map((todoItem) => (
            <Todo key={todoItem.id} todo={todoItem} />
         ))}
      </TodosContainer>
   )
}

export default TodosList
