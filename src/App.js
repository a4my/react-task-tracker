import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'work Out',
      day: 'Feb 6th at 12:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 7th at 5:30pm',
      reminder: true
    }
  ])

  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
