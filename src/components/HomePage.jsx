import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="wrapper-homepage">

      <h1>HomePage</h1>
      <div className='navs'>
        <NavLink to='/login' className='link'>Login</NavLink>
        <NavLink to='dashboard' className='link'>Dashboard</NavLink>
      </div>

    </div>


  )
}

export default HomePage