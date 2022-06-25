import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Table from './components/Table';



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Signup/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/profile" element={ <Profile/> }/>
          <Route path="/table" element={ <Table/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
