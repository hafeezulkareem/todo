import tw, { styled } from 'twin.macro'

import { Typo18BlackMontserratMedium } from '../../../Common/typos'

export const Section = styled.div`
   ${tw`
      flex items-center
   `}
`

export const TodoContainer = styled(Section)`
   ${tw`
        flex items-center justify-between mt-8px
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

export const DeleteButton = styled.button`
   ${tw`
      bg-transparent p-0 border-none cursor-pointer
   `}
`
