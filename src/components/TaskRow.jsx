import React from 'react';

const TaskRow = ({ name, done, toggleChecked, deleteTask }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          type='checkbox'
          checked={done}
          onChange={() => toggleChecked(name)}
        />
      </td>
      <td>
        <button
          onClick={() => deleteTask(name)}
          className='btn bg-danger text-white'
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
