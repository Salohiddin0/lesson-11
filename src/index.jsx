import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
export const TicketContext = createContext(null)

root.render(
  <>
    <TicketContext.Provider value={12}>
      <App />
    </TicketContext.Provider>
  </>
)
