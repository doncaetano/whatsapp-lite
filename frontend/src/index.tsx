import React from 'react'
import { render } from 'react-dom'

import { createServer } from 'miragejs'

import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/messages', () => {
      return [
        {
          id: '1',
          name: 'Jonny Walker',
          message: 'some test message',
          countUnreadMessages: 159,
          timeLastMessage: '17:00'
        },
        {
          id: '2',
          name: 'Beto Carrero',
          message: "btw I'm not here",
          countUnreadMessages: 0,
          timeLastMessage: '03:03'
        },
        {
          id: '3',
          name: 'Heinseberg',
          message: 'I want my money!',
          countUnreadMessages: 50,
          timeLastMessage: '00:48'
        },
        {
          id: '4',
          name: 'Obama',
          message: "what's up my dude",
          countUnreadMessages: 1,
          timeLastMessage: '12:00'
        },
        {
          id: '5',
          name: 'Cobbie',
          message: 'lets play',
          countUnreadMessages: 0,
          timeLastMessage: '7:53'
        },
        {
          id: '6',
          name: 'Random Group',
          message: 'bla bla bla',
          countUnreadMessages: 0,
          timeLastMessage: '13:45'
        },
        {
          id: '7',
          name: 'Young Nerd',
          message: 'study is cool o_o',
          countUnreadMessages: 3,
          timeLastMessage: '12:00'
        },
        {
          id: '8',
          name: 'TRock',
          message: 'rock rock rock',
          countUnreadMessages: 0,
          timeLastMessage: '16:22'
        },
        {
          id: '9',
          name: 'Ifood',
          message: 'I want more cupoms',
          countUnreadMessages: 0,
          timeLastMessage: '16:20'
        }
      ]
    })
  }
})

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
