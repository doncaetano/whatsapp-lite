import './styles/global.scss'

import { ContactList } from './components/ContactList'
import { SimpleHeader } from './components/SimpleHeader'
import { NavBar } from './components/NavBar'

export function App() {
  return (
    <div className="grid-container">
      <SimpleHeader />
      <ContactList />
      <NavBar />
    </div>
  )
}
