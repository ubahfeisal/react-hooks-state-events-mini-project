import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const handleDelete = (deleteTask) => {
    const deletedTask = tasks.filter(task => deleteTask.text !== task.text)
    setTasks(deletedTask)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={TASKS} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
//First, we'll want to display all the tasks in our app.
//Pass down the task data from App to TaskList, a
//and display each task using the Task component. 
//Make sure to use a key prop!