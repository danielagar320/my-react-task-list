import React, { useState } from "react";

export const Task = (props) => {
  const { name, description, status, onDelete, onEdit } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ name, description, status });
  const [error, setError] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const validateForm = () => {
    if (editedTask.name.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return false;
    }
    setError(""); // Limpiar el error si el nombre es válido
    return true;
  };

  const handleSaveClick = () => {
    if (validateForm()) {
      onEdit(editedTask);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div>
      {isEditing ? (
        <form>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleInputChange}
          />
          <span className="error">{error}</span>
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <label className="container">
            <input
              type="checkbox"
              checked={editedTask.status === "completed"}
              onChange={() => setEditedTask({ ...editedTask, status: "completed" })}
            />
            Completed
          </label>
          <button type="button" onClick={handleSaveClick}>Save</button>
        </form>
      ) : (
        <div>
          <label className="container">
            <input
              type="checkbox"
              checked={editedTask.status === "completed"}
              onChange={() => setEditedTask({ ...editedTask, status: "completed" })}
            />
            {editedTask.name}
          </label>
          <p>Description: {editedTask.description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

