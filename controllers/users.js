import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = []; //use Postman or Insomnia.

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() }); //...spread operator -->gives all users an id.
  res.send(` User with the name ${user.firstName} added to database`);
};


export const getUsers = (req, res) => {
  res.send(users);
};

export const getId = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};
