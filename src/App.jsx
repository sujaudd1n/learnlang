/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/steps'
import Footer from "./components/Footer"
import SelectLang from './components/SelectLang'
import FullWidthLink from './components/FullWidthLink'
import LanguageDetail from "./components/LanguageDetail"
import { Routes, Route } from "react-router-dom"

function createLanguageObject(name, href, color, icon) {
  return {
    name: name,
    href: href,
    color: color,
    icon: icon
  }
}

const languages = [
  createLanguageObject("JavaScript", "/javascript", "#F7DF1E", "/icons/javascript.svg"),
  createLanguageObject("Python", "/python", "#3776AB", "/icons/python.svg"),
  createLanguageObject("C", "/c", "#A8B9CC", "/icons/c.svg"),
  createLanguageObject("C++", "/cpp", "#00599C", "/icons/cplusplus.svg"),
]

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={
          <>
            <Header />

            <div
            className="main"
            css={css`
            @media (min-width: 928px) {
              display: flex;
              flex-flow: row;
              justify-content: space-between;
              gap: 30px;
            }
            `}
            >
              <Steps />
              <SelectLang languages={languages} />
            </div>
          </>
        } />

        {languages.map(language => (
          <Route
            key={language.name}
            path={language.href}
            element={<LanguageDetail name={language.href.slice(1)} />}
          />

        ))}
      </Routes>

      <Footer />
    </>
  )
}

export default App
