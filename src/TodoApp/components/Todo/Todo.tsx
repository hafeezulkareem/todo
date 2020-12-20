import React, { ReactElement } from 'react'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'

import { colors } from '../../../Common/colors'

import { deleteTodo, toggleTodoState } from '../../reducers/todosSlice'
import { TodoType } from '../../types'

import {
   DeleteButton,
   Section,
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
         <Section>
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
         </Section>
         <Section>
            <DeleteButton onClick={() => dispatch(deleteTodo(todo.id))}>
               <AiOutlineDelete size={18} />
            </DeleteButton>
         </Section>
      </TodoContainer>
   )
}

export default Todo
