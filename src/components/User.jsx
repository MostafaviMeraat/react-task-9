import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Context from '../store/Context'

const User = () => {
  const data = useContext(Context)
  const check = data[2].isAdmin

  return (
    <div>
      <h1>You're in User Page</h1>
      <NavLink to='/' className='link'>Back to Login</NavLink><br />
      {check && < NavLink to='/user/admin' className='link'>Goto Admin Page</NavLink>}
      <Outlet />
    </div >
  )
}

export default User
