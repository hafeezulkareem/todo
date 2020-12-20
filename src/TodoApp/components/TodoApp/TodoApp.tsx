import React, { ReactElement } from 'react'

import TodoHeader from '../TodoHeader'
import TodoTabs from '../TodoTabs'
import TodoForm from '../TodoForm'

import { TodoAppContainer } from './styledComponent'

const TodoApp = (): ReactElement => (
   <TodoAppContainer>
      <TodoHeader />
      <TodoTabs />
      <TodoForm />
   </TodoAppContainer>
)

export default TodoApp
