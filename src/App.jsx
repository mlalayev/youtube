import { useState } from 'react'
import './App.css'
import HEADER from '../src/components/header/header.jsx'
import LEFTASIDE from '../src/components/leftaside/leftaside.jsx'
import NAVBAR from '../src/components/navbar/navbar.jsx'
import MAINPAGE from '../src/components/mainpage/mainpage.jsx'

function App() {

  return (
    <>
      <HEADER />
      <LEFTASIDE />
      <NAVBAR />
      <MAINPAGE />
    </>
  )
}

export default App
