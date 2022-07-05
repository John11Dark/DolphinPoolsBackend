const userImageMapper = require("../src/mappers/userImagesMapper");

const users = [
  {
    name: "John Muller",
    userName: "John1_1Dark",
    DateOfBirth: "16-3-2001",
    role: "Administrator",
    countryCode: "+356",
    phoneNumber: "79230096",
    email: "john@domain.com",
    password: "12345",
    images: [{ fileName: "JohnMuller" }],
    id: 1,
  },
  {
    name: "User Two",
    userName: "User two",
    DateOfBirth: "16-3-2001",
    role: "Admin",
    countryCode: "+356",
    phoneNumber: "79230096",
    email: "user@domain.com",
    password: "12345",
    images: [{ fileName: "PoolOne" }],
    id: 2,
  },
  {
    name: "User Three",
    userName: "User two",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230096",
    email: "user@domain.com",
    password: "12345",
    images: [{ fileName: "PoolOne" }],
    id: 3,
  },
  {
    name: "User Four",
    userName: "User two",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230096",
    email: "user@domain.com",
    password: "12345",
    images: [{ fileName: "PoolOne" }],
    id: 4,
  },
  {
    name: "User Five",
    userName: "User two",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230096",
    email: "user@domain.com",
    password: "12345",
    images: [{ fileName: "PoolOne" }],
    id: 5,
  },
];

const usersDetails = [
  {
    id: 1,
    name: users[0].name,
    userAvatarImageUri: userImageMapper(users[0].images),
    role: users[0].role,
  },
  {
    id: 2,
    name: users[1].name,
    userAvatarImageUri: userImageMapper(users[1].images),
    role: users[1].role,
  },
  {
    id: 3,
    name: users[2].name,
    userAvatarImageUri: userImageMapper(users[0].images),
    role: users[2].role,
  },
  {
    id: 4,
    name: users[3].name,
    userAvatarImageUri: userImageMapper(users[3].images),
    role: users[3].role,
  },
  {
    id: 5,
    name: users[4].name,
    userAvatarImageUri: userImageMapper(users[4].images),
    role: users[4].role,
  },
];
const getUsers = () => usersDetails;
//const getUsersDetails = () => usersDetails;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const getUserByPhoneNumber = (phoneNumber) =>
  users.find((user) => user.phoneNumber === phoneNumber);

const getUserUsername = (userName) =>
  users.find((user) => user.userName === userName);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
  getUserByPhoneNumber,
  getUserUsername,
};
