import React, { useContext } from 'react'
import { useTicket } from './hook/useTicket'

const Nav = () => {
  const { isActive } = useTicket()
  return <div>Nav Component: {isActive ? 'Active' : 'InActive'}</div>
}
export default Nav
