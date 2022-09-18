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
  // console.log('value: ', value, 'data: ', data);
  if (value.user === data[0].user && value.pass === data[0].pass) {
    navigate('/user')

  }
  else if (value.user === data[1].user && value.pass === data[1].pass) {
    data[2].isAdmin = true
    navigate('/user')
  }
  else {
    console.log('not found');
  }

  return (
    <div className='form-wrapper'>
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
  )
}

export default Form