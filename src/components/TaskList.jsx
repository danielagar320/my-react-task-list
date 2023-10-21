import React, { useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const [taskInput, setTaskInput] = useState("");
  const [list, setList] = useState(props.list || []);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setList([...list, { name: taskInput }]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const editTask = (index, editedTask) => {
    const updatedList = [...list];
    updatedList[index] = { name: editedTask };
    setList(updatedList);
  };

  return (
    <div>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add your new todo"
          value={taskInput}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {list.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            onDelete={() => deleteTask(index)}
            onEdit={(editedTask) => editTask(index, editedTask)}
          />
        ))}
      </ul>
    </div>
  );
};