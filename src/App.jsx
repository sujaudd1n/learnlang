import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/steps'
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Steps />
      <Footer />
    </>
  )
}

export default App
