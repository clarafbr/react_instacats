import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import Footer from './Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
