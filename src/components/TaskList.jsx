import React, { useState, useEffect } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const [taskInput, setTaskInput] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputError, setInputError] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);

    if (e.target.value.length < 3) {
      setInputError("El nombre debe tener al menos 3 caracteres.");
    } else {
      setInputError("");
    }
  };

  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = { name: taskInput, description: "", status: "pending" };
      setList([...list, newTask]);
      setTaskInput("");
      setInputError(""); // Limpiar el error después de agregar la tarea
      saveToLocalStorage([...list, newTask]);
    } else {
      setInputError("El nombre de la tarea no puede estar vacío.");
    }
  };

  const deleteTask = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    saveToLocalStorage(updatedList);
  };

  const editTask = (index, editedTask) => {
    const updatedList = [...list];
    updatedList[index] = editedTask;
    setList(updatedList);
    saveToLocalStorage(updatedList);
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("taskList", JSON.stringify(data));
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("taskList"));
    if (storedList) {
      setList(storedList);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      saveToLocalStorage(list);
    }
  }, [list, loading]);

  return (
    <div>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add your new todo"
          value={taskInput}
          onChange={handleInputChange}
        />
        <button onClick={addTask} disabled={taskInput.length < 3}>
          Add
        </button>
        <span  style={{color:"red"}} className="error">{inputError}</span>
      </div>

      <ul>
        {list.map((task, index) => (
          <Task
            key={index}
            {...task}
            onDelete={() => deleteTask(index)}
            onEdit={(editedTask) => editTask(index, editedTask)}
          />
        ))}
      </ul>
    </div>
  );
};
