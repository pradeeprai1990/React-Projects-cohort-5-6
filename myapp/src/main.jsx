import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {Home} from './components/pages/Home.jsx'
import { Header } from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import About from './components/pages/About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    
  </StrictMode>,
)
