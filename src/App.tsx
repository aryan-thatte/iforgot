import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client';
import Button from '@mui/material/Button'

export interface TaskProps {
  title: string
  details: string
  complete: boolean
}

function App() {
  const [tasks, setTasks] = useState<[TaskProps] | any>([{title: "", details: "", complete: false}])
  const [updateTasks, setUpdateTasks] = useState(true)

  useEffect(() => {
    fetchTasks()
    setUpdateTasks(false)
  }, [updateTasks])

  async function fetchTasks() {
    const { data } = await supabase
      .from('tasks')
      .select()
    setTasks(data)
    console.log("data: ", data)
  }

  async function createTask(task: TaskProps) {
    await supabase
      .from('tasks')
      .insert([{title: task.title, details: task.details, complete: task.complete}])
      .single()
    setTasks({title: "", details: "", complete: false})
    fetchTasks()
  }

  return (
    <div className="App">
      <Button onClick={() => createTask({title: "test title", details: "test details", complete: false})}>ADD TASK</Button>
    </div>
  );
}

export default App;
