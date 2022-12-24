import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './client';

export interface TaskProps {
  title: string
  details: string
  complete: boolean
}

function App() {
  const [tasks, setTasks] = useState<[TaskProps] | any>([{title: "", details: "", complete: false}])

  useEffect(() => {
    fetchTasks()
  }, [])

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
    fetchTasks()
  }

  return (
    <div className="App">
      <button onClick={() => createTask({title: "test title", details: "test details", complete: false})}/>
    </div>
  );
}

export default App;
