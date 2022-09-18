import { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import Context from './store/Context';
import Admin from './components/Admin';
import User from './components/User';

function App() {

  const context = useContext(Context)

  return (
    <Context.Provider value={context}>

      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />

            <Route path='/user' element={<User />}>
              <Route path='/user/admin' element={<Admin />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </div>

    </Context.Provider>

  );
}

export default App;
