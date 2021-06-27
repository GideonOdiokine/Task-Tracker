import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, setShowAddTask, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1 style={{ color: "green" }}>{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={setShowAddTask}
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add Task"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
