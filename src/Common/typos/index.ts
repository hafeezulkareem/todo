import tw, { styled } from 'twin.macro'

/* Montserrat Font Styled Components */
const BaseMontserratText = styled.span`
   ${tw`font-montserrat`}
`

const BaseSemiBoldMontserratText = styled(BaseMontserratText)`
   ${tw`font-semibold`}
`

export const Typo14Grey20MontserratSemiBold = styled(
   BaseSemiBoldMontserratText
)`
   ${tw`
      text-14px text-gray20
   `}
`

export const Typo14WhiteMontserratSemiBold = styled(BaseSemiBoldMontserratText)`
   ${tw`
      text-14px text-white
   `}
`

/* Raleway Font Styled Components */
const BaseRalewayText = styled.span`
   ${tw`font-raleway`}
`

const BaseBoldRalewayText = styled(BaseRalewayText)`
   ${tw`font-bold`}
`

export const Typo36Grey20RalewayBold = styled(BaseBoldRalewayText)`
   ${tw`
      text-36px text-gray20
   `}
`
