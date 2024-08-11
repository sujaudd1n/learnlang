/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/steps'
import Footer from "./components/Footer"
import SelectLang from './components/SelectLang'
import FullWidthLink from './components/FullWidthLink'

function App() {
  return (
    <>
      <Header />

      <FullWidthLink
        href="#selectlang"
        text="</> Choose Your Language and Get Started!"
      />

      <Steps />
      <SelectLang id="selectlang" />
      <FullWidthLink
        href="https://github.com/sujaudd1n/learnlang"
        text="✨ Contibute on Github and help us grow."
      />
      <Footer />
    </>
  )
}

export default App
