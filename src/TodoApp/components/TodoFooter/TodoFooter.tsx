import React, { ReactElement } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import { colors } from '../../../Common/colors'
import { Button } from '../../../Common/components/Button'
import { showSuccessToast } from '../../../Common/utils/toastUtils'

import { COMPLETED } from '../../constants/UIConstants'
import {
   activeTab,
   completedTodosCount,
   deleteCompletedTodos
} from '../../reducers/todosSlice'

import {
   DeleteAllButton,
   DeleteAllButtonText,
   FooterContainer
} from './styledComponents'

const TodoFooter = (): ReactElement => {
   const tab = useSelector(activeTab)
   const todosCount = useSelector(completedTodosCount)
   const dispatch = useDispatch()

   return (
      <FooterContainer>
         {tab === COMPLETED ? (
            <DeleteAllButton
               color={Button.colors.danger}
               onClick={() => {
                  dispatch(deleteCompletedTodos())
                  showSuccessToast('all todos deleted')
               }}
               disabled={todosCount === 0}
            >
               <AiOutlineDelete color={colors.white} />
               <DeleteAllButtonText>delete all</DeleteAllButtonText>
            </DeleteAllButton>
         ) : null}
      </FooterContainer>
   )
}

export default TodoFooter
