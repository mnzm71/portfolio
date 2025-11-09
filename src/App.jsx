import { useState } from 'react'

import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

