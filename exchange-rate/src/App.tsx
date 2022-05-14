import { Routes, Route, Link } from 'react-router-dom'

import './App.css'

import { Homepage } from './pages/Homepage'
import { Aboutpage } from './pages/Aboutpage'
import { Notfoundpage } from './pages/Notfoundpage'

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>        
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  )
}

export default App
