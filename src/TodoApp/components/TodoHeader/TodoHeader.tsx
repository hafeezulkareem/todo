import React, { ReactElement } from 'react'

import { HeaderContainer, TitleText } from './styledComponents'

const TodoHeader = (): ReactElement => (
   <HeaderContainer>
      <TitleText>#todo</TitleText>
   </HeaderContainer>
)

export default TodoHeader
