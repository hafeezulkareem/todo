import React, { ReactElement } from 'react'

import TodoHeader from '../TodoHeader'

import { TodoAppContainer } from './styledComponent'

const TodoApp = (): ReactElement => (
   <TodoAppContainer>
      <TodoHeader />
   </TodoAppContainer>
)

export default TodoApp
