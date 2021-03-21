import styled from 'styled-components'

const StyledSimpleHeader = styled.h3`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 3.125rem auto 1.625rem auto;
  text-align: center;
`

export function SimpleHeader() {
  return <StyledSimpleHeader>Message</StyledSimpleHeader>
}
