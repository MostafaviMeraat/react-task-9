import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {

  return (
    <div>
      <h1>You're in Admin page that nested in User</h1>
      <NavLink to='/user' className='link'>Back to User</NavLink><br />
    </div>
  )
}

export default Admin