import { useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { FaTasks } from 'react-icons/fa'

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  
  // Get tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

  // Filter tasks for selected date
  const selectedDateTasks = tasks.filter(task => {
    if (!task.dueDate) return false
    const taskDate = new Date(task.dueDate)
    return (
      taskDate.getDate() === selectedDate.getDate() &&
      taskDate.getMonth() === selectedDate.getMonth() &&
      taskDate.getFullYear() === selectedDate.getFullYear()
    )
  })

  // Get dates that have tasks
  const datesWithTasks = tasks
    .filter(task => task.dueDate)
    .map(task => new Date(task.dueDate))

  // Custom tile content to show dots for dates with tasks
  const tileContent = ({ date }) => {
    const hasTask = datesWithTasks.some(
      taskDate =>
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
    )

    return hasTask ? (
      <div className="h-1 w-1 bg-primary-600 rounded-full mx-auto mt-1"></div>
    ) : null
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Calendar View</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="card">
            <ReactCalendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileContent={tileContent}
              className="w-full border-0 rounded-lg"
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaTasks className="mr-2 text-primary-600" />
              Tasks for {selectedDate.toLocaleDateString()}
            </h2>

            {selectedDateTasks.length === 0 ? (
              <p className="text-gray-500">No tasks scheduled for this date.</p>
            ) : (
              <div className="space-y-4">
                {selectedDateTasks.map(task => (
                  <div
                    key={task.id}
                    className={`p-3 rounded-lg border ${task.completed ? 'bg-gray-50 border-gray-200' : 'border-primary-200 bg-primary-50'}`}
                  >
                    <div className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                      {task.title}
                    </div>
                    {task.notes && (
                      <div className="text-sm text-gray-600 mt-1">{task.notes}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar