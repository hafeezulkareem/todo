import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import Input from '../../../Common/components/Input'
import { Typo14WhiteMontserratSemiBold } from '../../../Common/typos'

export const FormContainer = styled.div`
   ${tw`
        flex items-center mt-16px
    `}
`

export const InputField = styled(Input)`
   ${tw`
        h-full w-full mt-0 mr-24px rounded-12px px-12px py-20px border-silver text-gray20
    `}
`

export const AddButton = styled(Button)`
   ${tw`
        bg-royalBlue rounded-12px px-36px py-20px hover:bg-royalBlue shadow-addButton
    `}
`

export const AddButtonText = styled(Typo14WhiteMontserratSemiBold)``
