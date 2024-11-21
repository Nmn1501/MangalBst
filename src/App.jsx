import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemNav from './components/ItemNav';

function App() {
  

  return (
    <>
    <div className="ni">
    <Navbar />
    <ItemNav /></div>
    </>
  )
}

export default App
