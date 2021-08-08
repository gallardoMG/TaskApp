import React from 'react';

const TaskBanner = ({ userName, task }) => {
  return (
    <h4 className='bg-primary text-white text-uppercase text-center p-3'>
      {userName} Task App ({task.filter(el => el.done !== true).length} task to
      do)
    </h4>
  );
};

export default TaskBanner;
