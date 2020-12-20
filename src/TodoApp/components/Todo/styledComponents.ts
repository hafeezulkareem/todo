import tw, { styled } from 'twin.macro'

import { Typo18BlackMontserratMedium } from '../../../Common/typos'

export const TodoContainer = styled.div`
   ${tw`
        flex items-center mt-8px
    `}
`

export const TodoCheckboxContainer = styled.div`
   ${tw`
      cursor-pointer
   `}
`

export const TodoText = styled(Typo18BlackMontserratMedium)`
   ${tw`ml-8px`}
   ${({ completed }) => (completed ? tw`line-through` : tw``)}
`
