import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TaskManager from './pages/TaskManager'
import Calendar from './pages/Calendar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </main>
    </div>
  )
}

export default App