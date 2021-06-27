import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Pray for Viewers",
      day: "Jan 10th at 4:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "May 11th at 2:30pm",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const Addtask = (task) => {
    const newTask = { id: new Date(), ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <Router>
      <div className="container">
        <Header
          setShowAddTask={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask Addtask={Addtask} />}
              {tasks.length === 0 ? (
                "No Task To Show "
              ) : (
                <Tasks
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
