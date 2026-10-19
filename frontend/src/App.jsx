import { BrowserRouter, Routes, Route, Link } from 'react-router'
import reactLogo from './assets/react.svg'
import Tutorials from './Tutorials'
import Tutorial from './Tutorial'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>
            <img src={reactLogo}/>
            TutoBox
          </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Tutorials/>} />
        <Route path="/tutorials/:id" element={<Tutorial/>} />
        <Route path="/:id" element={<Tutorial/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
