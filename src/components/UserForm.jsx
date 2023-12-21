import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const UserForm = ({ onSubmit, initialData }) => {
  const [user, setUser] = useState({
    name: initialData.name || '',
    location: initialData.location || '',
    imageUrl: initialData.imageUrl || '',
  });

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      name: '',
      location: '',
      imageUrl: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={18} >
        <TextField
          label="Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChangeInput}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Location"
          type="text"
          name="location"
          value={user.location}
          onChange={handleChangeInput}
          sx={{ marginBottom: 2 }}

        />
        <TextField
          label="Image URL"
          type="text"
          name="imageUrl"
          value={user.imageUrl}
          onChange={handleChangeInput}
          sx={{ marginBottom: 2 }}

        />
        <Button type="submit" variant="contained" color="primary" sx={{ padding: 2, cursor: 'pointer' }}>
          Submit
        </Button>
        </Stack>
      </form>
    </div>
  );
};

export default UserForm;
