import React, { ReactElement } from 'react'

import TodoHeader from '../TodoHeader'
import TodoTabs from '../TodoTabs'
import TodoForm from '../TodoForm'
import TodosList from '../TodosList'
import TodoFooter from '../TodoFooter'

import { TodoAppContainer } from './styledComponent'

const TodoApp = (): ReactElement => (
   <TodoAppContainer>
      <TodoHeader />
      <TodoTabs />
      <TodoForm />
      <TodosList />
      <TodoFooter />
   </TodoAppContainer>
)

export default TodoApp
