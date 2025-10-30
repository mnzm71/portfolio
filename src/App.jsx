import { useState } from 'react'

import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

