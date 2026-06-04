import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Destinations from './pages/Destination'
import SuccessStories from './pages/SuccessStories'

function App () {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/successStories' element={<SuccessStories />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
