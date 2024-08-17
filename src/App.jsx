/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import RenderedMarkdown from "./components/RenderedMarkdown"
import Homepage from "./components/Homepage"

function createLanguageObject(name, path, color, icon) {
  return {
    name: name,
    path: path,
    color: color,
    icon: icon
  }
}

const languages = [
  createLanguageObject("JavaScript", "/languages/javascript", "#F7DF1E", "/icons/javascript.svg"),
  createLanguageObject("Python", "/languages/python", "#3776AB", "/icons/python.svg"),
  createLanguageObject("C", "/languages/c", "#A8B9CC", "/icons/c.svg"),
  createLanguageObject("C++", "/languages/cpp", "#00599C", "/icons/cplusplus.svg"),
]

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage languages={languages} />} />
        {languages.map(language => (
          <Route
            key={language.name}
            path={language.path}
            element={<RenderedMarkdown filepath={language.path + '.md'} />}
          />
        ))}
        <Route path="/steps" element={<RenderedMarkdown filepath="/steps.md" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
