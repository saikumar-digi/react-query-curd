import axios from 'axios';

export async function getAllUserData() {
  try {
    const response = await axios.get('http://localhost:3002/users');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(newUser) {
  try {
    const response = await axios.post('http://localhost:3002/users', newUser);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(updatedUser) {
  try {
    const response = await axios.put(`http://localhost:3002/users/${updatedUser.id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`http://localhost:3002/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`http://localhost:3002/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
