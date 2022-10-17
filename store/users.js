// ? * -->
const bcrypt = require("bcryptjs");

const userObject = require("../Models/usersModel");
const userImageMapper = require("../mappers/userImagesMapper");

// ? * --> Variables
const saltRounds = 15;

// ? * -->
/// *-->// create new user
async function addUser(user) {
  try {
    const newUser = await userObject.create({
      name: user.name,
      email: user.email,
      password: user.password,
      username: user.username,
      countryCode: user?.countryCode ? user.countryCode : "+356",
      phoneNumber: user.phoneNumber,
      dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth) : undefined,
      role: user?.role ? user.role : "user",
      gender: user?.gender ? user.gender : true,
      address: user?.address ? user.address : undefined,
      image: user.image,
    });
    newUser.image = await userImageMapper(newUser.image)[0];
    return newUser;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/// *-->// Delete single user
async function deleteUser(id) {
  const dbRes = await userObject.deleteOne(id);
  return dbRes;
}

/// *-->// Get * all users
async function getUsers() {
  try {
    const users = await userObject.find();
    users.forEach((user) => {
      user.image = userImageMapper(user.image)[0];
    });
    return users;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/// *-->// get * users details
async function getUsersDetails() {
  try {
    const users = await userObject
      .find()
      .select([
        "name",
        "username",
        "email",
        "role",
        "_id",
        "listingsLength",
        "image",
      ]);
    users.forEach((user) => {
      user.image = userImageMapper(user.image)[0];
    });
    return users;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/// *-->// Get single user by Id
async function getUserById(id, image) {
  try {
    const user = await userObject.findById(id);
    if (image) user.image = userImageMapper(user.image)[0];
    return user;
  } catch (error) {
    console.error("error");
  }
}

/// *-->// Get user by email
async function getUserByEmail(email, image) {
  const user = await userObject.where("email").equals(email);
  if (image) user[0].image = userImageMapper(user[0].image)[0];
  return user[0];
}

/// *-->// Get user by Phone number
async function getUserByPhoneNumber(phoneNumber) {
  const dbResponse = await userObject.where("phoneNumber").equals(phoneNumber);
  return dbResponse.length !== 0 ? dbResponse : null;
}

/// *-->// Get user by username
async function getUserUsername(username) {
  const dbResponse = await userObject.where("username").equals(username);
  return dbResponse.length !== 0 ? dbResponse : null;
}

/// *-->// Update single user
async function updateUser(user) {
  const userData = await userObject.findById(user._id);
  if (userData?._id == null) return { flag: "notFound" };
  userData.name = user?.name != null ? user.name : userData.name;
  userData.username =
    user?.username != null ? user.username : userData.username;
  userData.email = user?.email != null ? user.email : userData.email;
  userData.address = user?.address != null ? user.address : userData.address;
  userData.countryCode =
    user?.countryCode != null ? user.countryCode : userData.countryCode;
  userData.phoneNumber =
    user?.phoneNumber != null ? user.phoneNumber : userData.phoneNumber;
  userData.gender = user?.gender != null ? user.gender : userData.gender;
  userData.dateOfBirth =
    user?.dateOfBirth != null ? user.dateOfBirth : userData.dateOfBirth;
  userData.role = user?.role != null ? user.role : userData.role;

  if (user.updatePassword) {
    userData.password =
      user?.password != null ? user.password : userData.password;
  }
  try {
    const updatedUser = await userData.save();
    return { updatedUser: updatedUser, flag: "updated" };
  } catch (error) {
    console.error(error);
    return { error: error, flag: error };
  }
}

module.exports = {
  addUser,
  deleteUser,
  getUsers,
  getUserByEmail,
  getUserById,
  getUserByPhoneNumber,
  getUserUsername,
  getUsersDetails,
  updateUser,
};
