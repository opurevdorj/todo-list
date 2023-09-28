import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationColor, setNotificationColor] = useState("");

  const setNotification = (text, color) => {
    setNotificationMessage(text);
    setNotificationColor(color);
    setShowNotification(true); //display the notification
    setTimeout(() => {
      setNotificationMessage("");
      setShowNotification(false);
    }, 5000);
  };

  const handleAdd = () => {
    setTasks([...tasks, input]); // set tasks as input values ...dots
    setInput(""); // set input empty
    setNotification("Successfully added new task", "#a1fefe");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleRemove = (index) => {
    setTasks(tasks.filter((taskItem, i) => i !== index));
    setNotification("Successfully removed a task", "white");
  };

  console.log(input);
  return (
    <div>
      <div id="title">MY TO DO LIST</div>
      <div className="taskContainer">
        <input
          className="enterBox"
          type="text"
          placeholder="Enter to do list"
          onChange={handleInput}
          value={input}
        />
        <button id="saveButton" onClick={handleAdd}>
          Save
        </button>
      </div>
      {tasks.length >= 1 &&
        tasks.map((task, index) => {
          return (
            <div className="taskContainer">
              <div className="enterBox" key={index}>
                {task}
              </div>
              <button
                className="deleteButton"
                onClick={() => handleRemove(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      {showNotification ? (
        <div id="notification" style={{backgroundColor: notificationColor}}>
          {notificationMessage}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default ToDo;
