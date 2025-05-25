import { Link, useLocation } from 'react-router-dom'
import { FaBook, FaTasks, FaCalendar } from 'react-icons/fa'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'bg-primary-700' : ''
  }

  return (
    <nav className="bg-primary-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaBook className="text-2xl" />
            <span className="text-xl font-bold">StudyPlanner</span>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors ${isActive('/')}`}
            >
              <FaBook className="text-lg" />
              <span>Home</span>
            </Link>

            <Link
              to="/tasks"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors ${isActive('/tasks')}`}
            >
              <FaTasks className="text-lg" />
              <span>Tasks</span>
            </Link>

            <Link
              to="/calendar"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors ${isActive('/calendar')}`}
            >
              <FaCalendar className="text-lg" />
              <span>Calendar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar