import styled from 'styled-components'

import { Contact } from './Contact'

const StyledContactList = styled.div`
  flex: auto;
  overflow-y: auto;
`

export function ContactList() {
  return (
    <StyledContactList>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </StyledContactList>
  )
}
