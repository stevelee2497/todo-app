import { useState } from "react";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task) {
      setTasks([task, ...tasks]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((item, id) => index !== id));
  };

  return (
    <div className="flex h-screen text-white">
      <div className="w-2/5 bg-gradient-to-b from-purple-500 to-purple-700 flex flex-col">
        <img src="assets/note.png" alt="" className="max-w-2xl max-h-2xl" />
        <div className="flex flex-col p-6 flex-1 justify-between">
          <div className="flex flex-col">
            <h1 className="text-5xl my-4">Todo App</h1>
            <textarea
              placeholder="What's on your mind?"
              className="p-2 rounded-sm w-3/4 mt-4 text-gray-800"
              rows="4"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="p-2 bg-blue-500 rounded-sm w-2/5 mt-8 hover:bg-blue-600"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          <p>From @steven with love 💛</p>
        </div>
      </div>
      <div className="w-3/5 bg-gradient-to-b from-pink-500 to-pink-600 flex flex-col pt-8">
        {tasks.length ? (
          <div className="flex flex-col overflow-y-auto pb-6">
            {tasks.map((item, index) => (
              <Task key={index} task={item} index={index} removeTask={removeTask} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img alt="" src="assets/lazycat.png" className="mt-12" />
            <h1 className="text-2xl my-4">Your day is currently empty</h1>
            <h2>Let's fulfill it ;)</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
