import { Link } from 'react-router-dom'
import { FaTasks, FaCalendar, FaCheckCircle } from 'react-icons/fa'

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-800 mb-4">
          Welcome to StudyPlanner
        </h1>
        <p className="text-xl text-gray-600">
          Your personal assistant for organizing study tasks and staying on track
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <FaTasks className="text-3xl text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Task Manager</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Create, organize, and track your study tasks efficiently. Set due dates
            and add notes to stay organized.
          </p>
          <Link to="/tasks" className="btn-primary inline-block">
            Manage Tasks
          </Link>
        </div>

        <div className="card">
          <div className="flex items-center space-x-4 mb-4">
            <FaCalendar className="text-3xl text-primary-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Calendar View</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Visualize your study schedule and task deadlines in an intuitive
            calendar interface.
          </p>
          <Link to="/calendar" className="btn-primary inline-block">
            View Calendar
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-xl text-secondary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Task Organization</h3>
              <p className="text-gray-600">Easy task creation and management</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-xl text-secondary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Due Dates</h3>
              <p className="text-gray-600">Set and track task deadlines</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaCheckCircle className="text-xl text-secondary-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your study progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home