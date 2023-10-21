import React, { useState } from "react";

export const Task = (props) => {
  const { name, description, status, onDelete, onEdit } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ name, description, status });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <select
            name="status"
            value={editedTask.status}
            onChange={handleInputChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <label className="container">
            <input type="checkbox" checked={editedTask.status === "completed"} />
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
