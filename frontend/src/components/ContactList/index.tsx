import { useEffect, useState } from 'react'
import { StyledContactList } from './styles'

import { Contact } from '../Contact'
import { api } from '../../services/api'

interface Contact {
  id: string
  name: string
  message: string
  countUnreadMessages: number
  timeLastMessage: string
}

export function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    api.get('/messages').then(response => setContacts(response.data))
  }, [])

  return (
    <StyledContactList>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </StyledContactList>
  )
}
