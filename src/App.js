import { useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import Context from './store/Context';
import Admin from './components/Admin';
import User from './components/User';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';


function App() {

  const context = useContext(Context)

  return (
    <Context.Provider value={context}>

      <div className="main">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<Form />} />
            <Route path='dashboard' element={<DashBoard />}>
              <Route path='/dashboard/user' element={<User />} />
              <Route path='/dashboard/admin' element={<Admin />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </div>

    </Context.Provider>

  );
}

export default App;
