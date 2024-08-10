import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/steps'
import Footer from "./components/Footer"
import Contibution from './components/Contribution'
import SelectLang from './components/SelectLang'

function App() {
  return (
    <>
      <Header />
      <Steps />
      <SelectLang />
      <Contibution />
      <Footer />
    </>
  )
}

export default App
