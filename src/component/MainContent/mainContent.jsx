import React, { useState, useEffect } from "react";
import TaskInput from "../TaskInput/TaskInput";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/Action/AuthAction"; // Adjust the path as needed

import TaskList from "../TaskList/TaskList";
const mainContent = () => {
  const [task, setTask] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activityType, setActivityType] = useState("indoor"); // State for activity type
  const [tasks, setTasks] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   return isLoggedIn !== null ? JSON.parse(isLoggedIn) : false;
  // });
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  console.log(isLoggedIn, "islogin");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn === false) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(savedTasks);
    }
  }, [isLoggedIn]);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    if (isLoggedIn === true) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoggedIn]);
  const handleAddTask = () => {
    if (isLoggedIn === false) {
      alert("firstly user should login");
      setTask(""); // Clear input field
    }
    console.log(activityType);
    if (task.trim() && isLoggedIn === true) {
      setTasks([
        ...tasks,
        {
          text: task,
          completed: false,
          showDropdown: showDropdown,
          type: activityType,
        },
      ]);
      setTask(""); // Clear input field
      // setActivityType('indoor'); // Reset activity type to default
    }
  };
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const handledelItem = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    console.log("sdfdsf", updatedTasks);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  const handleLogin = () => {
    dispatch(login());
    // setIsLoggedIn(true);

  };
  const handleLogout = () => {
    // localStorage.removeItem('tasks'); // Clear tasks from local storage
    setTasks([]); // Clear tasks from state
    dispatch(logout());
    // setIsLoggedIn(false); // Set isLoggedIn to false and update localStorage

  };
  return (
    <div className="px-3 mb-3">
      <TaskInput
        activityType={activityType}
        setActivityType={setActivityType}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        setTask={setTask}
        task={task}
        handleAddTask={handleAddTask}
        handleKeyPress={handleKeyPress}
      />
      {isLoggedIn === false ? (
        <button className="my-3" onClick={handleLogin}>Login</button>
      ) : (
        <>
          <TaskList
            activityType={activityType}
            tasks={tasks}
            handleToggleComplete={handleToggleComplete}
            handledelItem={handledelItem}
          />
          <button className="my-3" onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default mainContent;
