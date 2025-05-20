import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="text-sm space-x-4">
      <Link to="/" className="text-gray-700 hover:text-black">
        Home
      </Link>
      <Link to="/projects" className="text-gray-700 hover:text-black">
        Projects
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-black">
        Contact
      </Link>
    </nav>
  )
}

export default Navigation
