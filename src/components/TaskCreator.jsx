import React, { useState } from 'react';

const TaskCreator = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const updateTask = e => setNewTask(e.target.value);
  const saveTask = () => {
    if (newTask) {
      addTask({ name: newTask, done: false });
      setNewTask('');
    }
  };
  return (
    <div className='input-group mb-2'>
      <input
        type='text'
        placeholder='Enter a new task...'
        className='form-control'
        value={newTask}
        onChange={e => updateTask(e)}
      />
      <div className='input-group-append'>
        <button className='btn btn-primary p-1' onClick={saveTask}>
          SAVE TASK
        </button>
      </div>
    </div>
  );
};

export default TaskCreator;
