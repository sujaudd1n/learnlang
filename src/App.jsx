/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { useState } from 'react'
import Header from './components/Header'
import Steps from './components/Steps'
import Footer from "./components/Footer"
import SelectLang from './components/SelectLang'
import LanguageDetail from "./components/RenderedMarkdown"
import { Routes, Route } from "react-router-dom"
import RenderedMarkdown from "./components/RenderedMarkdown"

function createLanguageObject(name, path, color, icon) {
  return {
    name: name,
    path: path,
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
              gap: 50px;
              max-width: 1500px;
              margin: 0 auto;
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
            path={language.path}
            element={<RenderedMarkdown filepath={`/languages/${language.path.slice(1)}.md`} />}
          />
        ))}
        <Route path="/steps" element={<RenderedMarkdown filepath="/steps.md" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
