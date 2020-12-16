import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ACTIVE, ALL, COMPLETED } from '../../constants/UIConstants'
import { activeTab, updateActiveTab } from '../../reducers/todosSlice'

import { Tab, TabContainer, TabText, Underline } from './styledComponents'

const TodoTabs = (): ReactElement => {
   const tab = useSelector(activeTab)
   const dispatch = useDispatch()

   const renderTabUnderline = (isActive: boolean) =>
      isActive ? <Underline /> : null

   return (
      <TabContainer>
         <Tab onClick={() => dispatch(updateActiveTab(ALL))}>
            <TabText>All</TabText>
            {renderTabUnderline(tab === ALL)}
         </Tab>
         <Tab onClick={() => dispatch(updateActiveTab(ACTIVE))}>
            <TabText>Active</TabText>
            {renderTabUnderline(tab === ACTIVE)}
         </Tab>
         <Tab onClick={() => dispatch(updateActiveTab(COMPLETED))}>
            <TabText>Completed</TabText>
            {renderTabUnderline(tab === COMPLETED)}
         </Tab>
      </TabContainer>
   )
}

export default TodoTabs
