import React, { useState, useEffect } from "react";
import { ChakraProvider, Button, List, ThemeProvider} from "@chakra-ui/react";
import { Task } from "./Task";

export const TaskList = () => {
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

  return (
    <ChakraProvider>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add your new todo"
          value={taskInput}
          onChange={handleInputChange}
        />
        <Button onClick={addTask} disabled={taskInput.length < 3}>
          Add
        </Button>
        <span className="error">{inputError}</span>
      </div>

      <List>
        {list.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            description={task.description}
            status={task.status}
            onDelete={() => deleteTask(index)}
            onEdit={(editedTask) => editTask(index, editedTask)}
          />
        ))}
      </List>
    </ChakraProvider>
  );
};

