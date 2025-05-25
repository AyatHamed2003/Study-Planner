import { useState } from 'react'
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  const [editingTask, setEditingTask] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDueDate, setEditDueDate] = useState('')
  const [editNotes, setEditNotes] = useState('')

  const startEditing = (task) => {
    setEditingTask(task.id)
    setEditTitle(task.title)
    setEditDueDate(task.dueDate || '')
    setEditNotes(task.notes || '')
  }

  const handleEdit = (taskId) => {
    onEdit(taskId, {
      title: editTitle.trim(),
      dueDate: editDueDate,
      notes: editNotes.trim(),
    })
    setEditingTask(null)
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Add your first task above!
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Tasks</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'bg-gray-50' : ''}`}
          >
            {editingTask === task.id ? (
              <div className="w-full space-y-3">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="input-field"
                />
                <input
                  type="date"
                  value={editDueDate}
                  onChange={(e) => setEditDueDate(e.target.value)}
                  className="input-field"
                />
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="input-field"
                  rows="2"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="btn-primary"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingTask(null)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggle(task.id)}
                      className="h-5 w-5 text-primary-600 rounded"
                    />
                    <span
                      className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                    >
                      {task.title}
                    </span>
                  </div>
                  {task.dueDate && (
                    <div className="text-sm text-gray-500 mt-1">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  )}
                  {task.notes && (
                    <div className="text-sm text-gray-600 mt-1">{task.notes}</div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => startEditing(task)}
                    className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList