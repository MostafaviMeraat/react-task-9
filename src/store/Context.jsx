import React, { createContext, useState } from 'react'

const data = [{
  user: 'user',
  pass: 'user'
}, {
  user: 'admin',
  pass: 'admin'
}, {
  isAdmin: false,
  inAdmin: false
}
]

const Context = createContext(data)

export default Context