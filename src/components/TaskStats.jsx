import { FaCheckCircle, FaClock, FaTasks } from 'react-icons/fa'

function TaskStats({ tasks }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0

  const upcomingTasks = tasks.filter(
    (task) => !task.completed && task.dueDate && new Date(task.dueDate) > new Date()
  ).length

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Task Statistics</h2>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <FaTasks className="text-2xl text-primary-600" />
          <div>
            <div className="text-sm text-gray-500">Total Tasks</div>
            <div className="text-2xl font-semibold text-gray-800">{totalTasks}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaCheckCircle className="text-2xl text-secondary-600" />
          <div>
            <div className="text-sm text-gray-500">Completed</div>
            <div className="text-2xl font-semibold text-gray-800">{completedTasks}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaClock className="text-2xl text-yellow-500" />
          <div>
            <div className="text-sm text-gray-500">Pending</div>
            <div className="text-2xl font-semibold text-gray-800">{pendingTasks}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-sm text-gray-500">Completion Rate</span>
            <span className="text-sm font-medium text-gray-800">{completionRate}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-600 rounded-full"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Quick Summary</div>
          <div className="text-sm text-gray-800">
            You have {upcomingTasks} upcoming {upcomingTasks === 1 ? 'task' : 'tasks'} and{' '}
            {pendingTasks} pending {pendingTasks === 1 ? 'task' : 'tasks'} to complete.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskStats