import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "../CheckList/CheckList.module.css";

const AddTask = () => {
  const location = useLocation();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      const updatedTasks = [...tasks, { title: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      {location.pathname !== "/mobile" && (
        <div>
          <Link to={"/mobile"}>
            <button className={s.mobile}>Mobile</button>
          </Link>
        </div>
      )}
      <div>
        <h1>Calendar Checklist</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} onClick={() => toggleTaskCompletion(index)}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
