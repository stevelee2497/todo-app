import { useState, useEffect } from "react";
import Task from "./components/Task";
import note from "./assets/images/note.png";
import lazycat from "./assets/images/lazycat.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && savedTasks.length) {
      setTasks(savedTasks);
    }
  }, []);

  const handleAddTask = () => {
    if (task) {
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
      setTask("");
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((item, id) => index !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen text-white">
      <div className="md:w-2/5 bg-gradient-to-b from-purple-500 to-purple-700 flex flex-col">
        <img src={note} alt="" className="max-w-2xl max-h-2xl" />
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
          <p className="mt-6">From @steven with love 💛</p>
        </div>
      </div>
      <div className="md:w-3/5 bg-gradient-to-b from-pink-500 to-pink-600 flex flex-col pt-8 pb-20 px-10">
        {tasks.length ? (
          <div className="flex flex-col overflow-y-auto pb-6">
            {tasks.map((item, index) => (
              <Task key={index} task={item} index={index} removeTask={removeTask} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img alt="" src={lazycat} className="mt-12" />
            <h1 className="text-2xl my-4">Your day is currently empty</h1>
            <h2>Let's fulfill it ;)</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
