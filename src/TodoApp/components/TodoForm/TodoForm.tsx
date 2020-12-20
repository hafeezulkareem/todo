import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
   showErrorToast,
   showSuccessToast
} from '../../../Common/utils/toastUtils'

import { addTodo } from '../../reducers/todosSlice'

import {
   AddButton,
   AddButtonText,
   FormContainer,
   InputField
} from './styledComponents'

const TodoForm = (): ReactElement => {
   const [todoValue, setTodoValue] = useState('')
   const dispatch = useDispatch()

   const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoValue(event.target.value)
   }

   const addTodoToList = () => {
      if (todoValue === '') {
         showErrorToast("todo can't be empty")
      } else {
         const id = Math.random().toString()
         const todoData = { id, todo: todoValue.trim(), completed: false }
         setTodoValue('')
         dispatch(addTodo(todoData))
         showSuccessToast('todo added')
      }
   }

   const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         addTodoToList()
      }
   }

   return (
      <FormContainer>
         <InputField
            input={todoValue}
            onChangeInput={onChangeInput}
            placeholder={'add todo'}
            onKeyDown={onKeyDown}
         />
         <AddButton onClick={addTodoToList}>
            <AddButtonText>Add</AddButtonText>
         </AddButton>
      </FormContainer>
   )
}

export default TodoForm
