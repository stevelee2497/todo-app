import React, { useState } from "react";

const Task = (props) => {
  const [hover, setHover] = useState(false);
  const { removeTask, index, task } = props;
  return (
    <div className="bg-white rounded-sm p-4 mx-4 mt-3 text-gray-800 flex items-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => removeTask(index)}
      >
        {hover ? (
          <i className="far fa-check-circle mr-3"></i>
        ) : (
          <i className="far fa-circle mr-3"></i>
        )}
      </div>
      {task}
    </div>
  );
};

export default Task;
