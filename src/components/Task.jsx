import React, { useState } from "react";

export const Task = (props) => {
  const { name, onDelete, onEdit } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedTask} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <label className="container">
            <input type="checkbox" />
            {name}
          </label>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};