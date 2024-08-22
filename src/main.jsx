import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './pages/components/navBar/index.jsx'
import Card from './pages/components/card/Card.jsx'
import './layout.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <NavBar className="navbar" />
    <Card className="card" />
    </div>


  </StrictMode>,
)
