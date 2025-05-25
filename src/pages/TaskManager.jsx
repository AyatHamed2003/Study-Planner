import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskStats from '../components/TaskStats'

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Manager</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TaskForm onSubmit={addTask} />
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
          />
        </div>
        
        <div className="md:col-span-1">
          <TaskStats tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default TaskManager