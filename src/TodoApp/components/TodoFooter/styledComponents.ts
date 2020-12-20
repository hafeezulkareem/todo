import tw, { styled } from 'twin.macro'

import { Button } from '../../../Common/components/Button'
import { Typo12WhiteMontserratSemiBold } from '../../../Common/typos'

export const FooterContainer = styled.div`
   ${tw`
        flex justify-end mt-32px
    `}
`

export const DeleteAllButton = styled(Button)`
   ${tw`
        py-16px bg-burntSienna hover:bg-chestnutRose
    `}
`

export const DeleteAllButtonText = styled(Typo12WhiteMontserratSemiBold)`
   ${tw`
        ml-8px
    `}
`
