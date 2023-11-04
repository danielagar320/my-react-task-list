import React, { useState } from "react";
import { ChakraProvider, Checkbox, Input, Select, Button } from "@chakra-ui/react";

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
    <ChakraProvider>
      {isEditing ? (
        <div>
          <Input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />
          <Select
            name="status"
            value={editedTask.status}
            onChange={handleInputChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Select>
          <Button onClick={handleSaveClick}>Save</Button>
        </div>
      ) : (
        <div>
          <Box
            border="1px solid black"
            borderRadius="5px"
            padding="10px"
          >
            <Checkbox checked={editedTask.status === "completed"} />
            <Text>{editedTask.name}</Text>
            <p>Description: {editedTask.description}</p>
            <Button onClick={handleEditClick}>Edit</Button>
            <Button onClick={onDelete}>Delete</Button>
          </Box>
        </div>
      )}
    </ChakraProvider>
  );
};

