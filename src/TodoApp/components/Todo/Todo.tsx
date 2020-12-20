import React, { ReactElement } from 'react'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { useDispatch } from 'react-redux'

import { colors } from '../../../Common/colors'

import { toggleTodoState } from '../../reducers/todosSlice'
import { TodoType } from '../../types'

import {
   TodoCheckboxContainer,
   TodoContainer,
   TodoText
} from './styledComponents'

interface TodoProps {
   todo: TodoType
}

const Todo = (props: TodoProps): ReactElement => {
   const dispatch = useDispatch()
   const { todo } = props
   return (
      <TodoContainer>
         <TodoCheckboxContainer
            onClick={() => dispatch(toggleTodoState(todo.id))}
         >
            {todo.completed ? (
               <ImCheckboxChecked size={16} color={colors.royalBlue} />
            ) : (
               <ImCheckboxUnchecked size={16} />
            )}
         </TodoCheckboxContainer>
         <TodoText completed={todo.completed}>{todo.todo}</TodoText>
      </TodoContainer>
   )
}

export default Todo
