import { Routes, Route } from 'react-router-dom';
import './App.css'

import Nav from './components/Nav';
import Home from './pages/HomePage'
import Breathing from './pages/Breathing';
import Planner from './pages/Planner';
import Tasks from './pages/Tasks';
import NewUser from './pages/NewUser';
import LogIn from './pages/LogIn';
import axios from 'axios';
import Modal from 'react-modal';

axios.defaults.baseURL = 'http://localhost:5173'
axios.defaults.withCredentials = true;

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/planner' element={<Planner />} />
      <Route path='/breathing' element={<Breathing />} />
      <Route path='/login' element={<LogIn />} />
      <Route path ='/newuser' element={<NewUser />} />
      </Routes>
      
    </>
  )
}

export default App
