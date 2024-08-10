import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/steps'
import Footer from "./components/Footer"
import Contibution from './components/Contribution'
import SelectLang from './components/SelectLang'

function App() {
  const [count, setCount] = useState(0)

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
