import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

import { ContactList } from './components/ContactList'
import { SimpleHeader } from './components/SimpleHeader'
import { NavBar } from './components/NavBar'

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: 100vh;

  @media (min-width: 675px) {
    background-color: var(--green);
  }
`

export function App() {
  return (
    <StyledGridContainer>
      <SimpleHeader />
      <ContactList />
      <NavBar />
      <GlobalStyle />
    </StyledGridContainer>
  )
}
