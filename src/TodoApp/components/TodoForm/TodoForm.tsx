import React, { ReactElement, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../reducers/todosSlice'

import { AddButton, AddButtonText, Form, InputField } from './styledComponents'

const TodoForm = (): ReactElement => {
   const [todoValue, setTodoValue] = useState('')
   const dispatch = useDispatch()

   const onChangeInput = (event) => {
      setTodoValue(event.target.value)
   }

   const addTodoToList = () => {
      if (todoValue === '') {
         // TODO: Add toast
      } else {
         const id = Math.random().toString()
         const todoData = { id, todo: todoValue.trim(), completed: false }
         setTodoValue('')
         dispatch(addTodo(todoData))
      }
   }

   const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      addTodoToList()
   }

   return (
      <Form onSubmit={submitForm}>
         <InputField
            input={todoValue}
            onChangeInput={onChangeInput}
            placeholder={'add todo'}
         />
         <AddButton onClick={addTodoToList}>
            <AddButtonText>Add</AddButtonText>
         </AddButton>
      </Form>
   )
}

export default TodoForm
