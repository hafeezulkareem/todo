import React, { ReactElement } from 'react'

import TodoHeader from '../TodoHeader'
import TodoTabs from '../TodoTabs'
import TodoForm from '../TodoForm'
import TodosList from '../TodosList'

import { TodoAppContainer } from './styledComponent'

const TodoApp = (): ReactElement => (
   <TodoAppContainer>
      <TodoHeader />
      <TodoTabs />
      <TodoForm />
      <TodosList />
   </TodoAppContainer>
)

export default TodoApp
