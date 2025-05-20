import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Contact from '@pages/Contact'
import Projects from '@pages/Projects'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRouter
