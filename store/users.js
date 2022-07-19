const userImageMapper = require("../mappers/userImagesMapper");
const listingsStore = require("./listings");

let users = [
  {
    name: "John Muller",
    username: "John1_1Dark",
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
    name: "User Twsdfsdfsdfdsf",
    username: "5654sf",
    DateOfBirth: "16-3-2001",
    role: "Admin",
    countryCode: "+356",
    phoneNumber: "79230094",
    email: "user2@domain.com",
    password: "12345",
    images: [{ fileName: "maleAvatar" }],
    id: 2,
  },
  {
    name: "User Three",
    username: "Usersdfs two",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230093",
    email: "user3@domain.com",
    password: "12345",
    images: [{ fileName: "maleAvatar" }],
    id: 3,
  },
  {
    name: "User Four",
    username: "User sdftwo",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230092",
    email: "user4@domain.com",
    password: "12345",
    images: [{ fileName: "maleAvatar" }],
    id: 4,
  },
  {
    name: "User Five",
    username: "User sdfsdftwo",
    DateOfBirth: "16-3-2001",
    role: "user",
    countryCode: "+356",
    phoneNumber: "79230091",
    email: "user5@domain.com",
    password: "12345",
    images: [{ fileName: "maleAvatar" }],
    id: 5,
  },
  {
    name: "Dolphin Pools App",
    email: "admin@Dolphinpools.com",
    password: "12345",
    username: "Dolphin1_1App",
    countryCode: "+356",
    phoneNumber: "79230090",
    role: "Administrator",
    images: [{ fileName: "DolphinPoolApp" }],
    id: 6,
  },
];

let usersDetails = [
  {
    id: 1,
    name: users[1].name,
    email: users[1].email,
    username: users[1].username,
    phoneNumber: users[1].phoneNumber,
    ...userImageMapper(users[1].images),
    role: users[1].role,
  },
  {
    id: 2,
    name: users[2].name,
    email: users[2].email,
    username: users[2].username,
    phoneNumber: users[2].phoneNumber,
    ...userImageMapper(users[0].images),
    role: users[2].role,
  },
  {
    id: 3,
    name: users[3].name,
    email: users[3].email,
    username: users[3].username,
    phoneNumber: users[3].phoneNumber,
    ...userImageMapper(users[3].images),
    role: users[3].role,
  },
  {
    id: 4,
    name: users[4].name,
    email: users[4].email,
    username: users[4].username,
    phoneNumber: users[4].phoneNumber,
    ...userImageMapper(users[4].images),
    role: users[4].role,
  },
  {
    id: 5,
    name: users[5].name,
    email: users[5].email,
    username: users[5].username,
    phoneNumber: users[5].phoneNumber,
    ...userImageMapper(users[5].images),
    role: users[5].role,
  },
];

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
  users.sort((userA, userB) => userA.id - userB.id);
  console.log(user);
  console.log(getUsers());
};

const deleteUser = (userID) => {
  console.log(userID);
  users = users.filter((user) => user.id !== userID);
  usersDetails = usersDetails.filter((user) => user.id !== userID);
  listingsStore.deleteList(userID, true);
};

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const getUserByPhoneNumber = (phoneNumber) =>
  users.find((user) => user.phoneNumber === phoneNumber);

const getUserUsername = (username) =>
  users.find((user) => user.username === username);

const updateUser = (id) => {
  let user = users.find((user) => user.id === id);
  users = users.filter((user) => user.id != id);
  return user;
};

module.exports = {
  addUser,
  deleteUser,
  getUsers,
  getUserByEmail,
  getUserById,
  getUserByPhoneNumber,
  getUserUsername,
  updateUser,
};
