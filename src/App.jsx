import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Herosec from './components/Herosec'
import Imagesec from './components/imagesec'

function App() {

  return (
    <>
      <Banner />
      <Herosec />
      <Imagesec />
    </>
  )
}

export default App
