/** @jsxImportSource @emotion/react */

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
  createLanguageObject("C++", "/languages/cpp", "#00599C", "/icons/cplusplus.svg"),
  createLanguageObject("NodeJS", "/languages/nodejs", "#5FA04E", "/icons/nodedotjs.svg"),
  createLanguageObject("C", "/languages/c", "#A8B9CC", "/icons/c.svg"),
  createLanguageObject("Rust", "/languages/rust", "#666666", "/icons/rust.svg"),
  createLanguageObject("Go", "/languages/go", "#00ADD8", "/icons/go.svg"),
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
        <Route path="/about" element={<RenderedMarkdown filepath="/about.md" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
