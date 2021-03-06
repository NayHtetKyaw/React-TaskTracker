import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm', 
        reminder: true,
    },
    {
        id: 2, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm', 
        reminder: true,
    },
    {
        id: 3, 
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm', 
        reminder: false,
    },    
  ])

// Add tasks 
const addTask = (task) => {
  
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// delete tasks
const deleteTasks = (id) => {
  console.log('deleted ID: ', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle remainder 

const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
      <Header  />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} 
        onDelete={deleteTasks}
        onToggle={toggleReminder}
        /> : 'No Tasks to show!'}
    </div>
  )
}


export default App
