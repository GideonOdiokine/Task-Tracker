import React from "react";
import Task from "./Task";

const Tasks = ({ tasks,deleteTask,toggleTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} toggleTask={toggleTask} deleteTask={deleteTask} {...task} />
      ))}
    </>
  );
};

export default Tasks;
