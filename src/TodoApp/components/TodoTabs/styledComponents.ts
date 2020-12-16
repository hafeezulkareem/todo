import tw, { styled } from 'twin.macro'

import { Typo14Grey20MontserratSemiBold } from '../../../Common/typos'

export const TabContainer = styled.div`
   ${tw`
        flex justify-between px-24px border-0 border-b border-solid border-silver
    `}
   margin-top: 60px;
`

export const Tab = styled.div`
   ${tw`
        w-90px flex flex-col items-center cursor-pointer
    `};
`

export const TabText = styled(Typo14Grey20MontserratSemiBold)``

export const Underline = styled.div`
   ${tw`
        w-full mt-12px h-4px bg-royalBlue rounded-t
    `}
`
