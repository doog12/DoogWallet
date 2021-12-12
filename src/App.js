import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './Pages/Page404'
import Converter from './Pages/Converter.jsx'
import Header from './Components/Header/Header.jsx'

function App() {
  return (
    <Router basename="/DoogWallet">
      <div className="App">
        <Header />
        <Routes>
          <Route path={'/home'} element={<Navigate to="/" />} />
          <Route path={"index.html"} element={<Navigate to="/" />} />
          <Route path="/" element={<Converter />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
