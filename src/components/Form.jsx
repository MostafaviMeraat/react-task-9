import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../store/Context'
const Form = () => {

  const data = useContext(Context)
  const navigate = useNavigate()
  const [value, setValue] = useState({
    user: '',
    pass: ''
  })

  const check = (e) => {
    if (e.target.name === 'userName') {
      setValue({
        user: e.target.value,
        pass: value.pass
      })
    }
    else if (e.target.name === 'password') {
      setValue({
        user: value.user,
        pass: e.target.value
      })
    }
  }

  const back = () => {
    navigate("/")
  }

  const handelSubmit = () => {
    if (value.user === data[0].user && value.pass === data[0].pass ||
      value.user === data[1].user && value.pass === data[1].pass) {
      data[2].name = value.user
      navigate('/dashboard')

    }

  }

  return (
    <div className='form-wrapper'>
      <i
        className="fa-sharp fa-solid fa-arrow-left"
        onClick={back}
      ></i>
      <h1>You're in Login page</h1>
      <div className='inputs-wrapper'>
        <div className='childs'>
          <label>User Name: </label>
          <input
            autoFocus
            type='text'
            name='userName'
            onChange={check}
          />
        </div>

        <div className='childs'>
          <label>&nbsp; Password: </label>
          <input
            type='text'
            name='password'
            onChange={check}
          />
        </div>
      </div>

      <div className="button">
        <button
          onClick={handelSubmit}
        >
          Submit</button></div>

    </div>
  )
}

export default Form