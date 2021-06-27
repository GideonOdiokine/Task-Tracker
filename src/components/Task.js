import React from "react";

const Task = ({ text, day, id, deleteTask, toggleTask, reminder }) => {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleTask(id)}
    >
      <h3>
        {text}{" "}
        <button
          onClick={() => deleteTask(id)}
          style={{
            color: "red",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          X
        </button>
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
