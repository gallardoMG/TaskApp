import { useState, useEffect } from "react";
import { TaskBanner, TaskRow, TaskCreator, VisibilityControls } from "./components/index";
import dataExample from "./components/data";

function App() {
  const [userName, setUserName] = useState('Eduardo');
  const [task, setTask] = useState([]);
  const addTask = (newTask) => {
    if (!task.find(el => el.name === newTask.name)) {
      setTask([...task, newTask]);
    }
    else {
      alert('The note already exist')
    }

  }
  const toggleCheked = (name) =>
    setTask(task.map(el => el.name === name ? { ...el, done: !el.done } : el));
  const deleteTask = (name) => {
    setTask(task.filter(el => el.name !== name));
  }
  const mapTask = (condition) => (
    task.filter(el => el.done === condition)
      .map(el =>
        < TaskRow key={el.name} name={el.name} done={el.done} toggleChecked={toggleCheked} deleteTask={deleteTask} />)
  )
  const [showComplete, setShowComplete] = useState(true);
  useEffect(() => {
    const data = localStorage.getItem('task');
    if (data !== null) {
      setTask(JSON.parse(data));
    } else {
      setTask(dataExample);
      setUserName('Gallardo MG');
      setShowComplete(true);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task))
  }, [task])
  return (
    <div className='container justify-content-center p-4'>
      <TaskBanner userName={userName} task={task} />
      <TaskCreator addTask={addTask} task={task} />
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Pending</th>
          </tr>
        </thead>
        <tbody>
          {mapTask(false)}
        </tbody>
      </table>
      <div className='bg-secundary-text-white text-center p-2'>
        <VisibilityControls
          callback={checked => setShowComplete(checked)}
          description={'complete Task'}
          showComplete={showComplete} />
      </div>
      {showComplete && (
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <td>Description</td>
              <td>Done</td>
            </tr>
          </thead>
          <tbody>
            {mapTask(true)}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default App;
