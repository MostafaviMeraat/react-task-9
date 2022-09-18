import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Context from '../store/Context'

const DashBoard = () => {

  const data = useContext(Context)
  const [isUser, setIsUser] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const currentLoggedIn = data[2].name
  const navigate = useNavigate()

  console.log(currentLoggedIn);

  const back = () => {
    navigate(-1)
  }

  const check = (e) => {
    if (currentLoggedIn === 'user' && e.target.name === 'user') {
      navigate('/dashboard/user')
    }
    else if (currentLoggedIn === 'admin' && e.target.name === 'admin') {
      navigate('/dashboard/admin')
    }
    else if (!currentLoggedIn) {
      alert("Login first")
    }
    else if (currentLoggedIn === 'user' && e.target.name === 'admin') {
      alert('you are not ADMIN so, Not authorized')
    }
    else if (currentLoggedIn === 'admin' && e.target.name === 'user') {
      alert('you are not USER so, Not authorized')
    }
  }

  return (
    <div>
      <Outlet />
      <div className="back"> <i
        className="fa-sharp fa-solid fa-arrow-left"
        onClick={back}
      ></i>
      </div>
      <button className='link' onClick={check} name='user'>User</button>
      <button className='link' onClick={check} name='admin'>Admin</button>
      {/* <h1>You're in DashBoard</h1> */}
    </div>
  )
}

export default DashBoard