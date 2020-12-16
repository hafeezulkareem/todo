import React, { ReactElement } from 'react'

import TodoHeader from '../TodoHeader'
import TodoTabs from '../TodoTabs'

import { TodoAppContainer } from './styledComponent'

const TodoApp = (): ReactElement => (
   <TodoAppContainer>
      <TodoHeader />
      <TodoTabs />
   </TodoAppContainer>
)

export default TodoApp
