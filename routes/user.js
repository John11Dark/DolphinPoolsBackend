const express = require("express");
const router = express.Router();

const usersStore = require("../store/users");
const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");

router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  usersStore.deleteUser(userId);
  res.status(201).send({ message: "user has been removed!" });
});

router.get("/:id", auth, (req, res) => {
  const userId = parseInt(req.params.id);
  const user = usersStore.getUserById(userId);
  if (!user) return res.status(404).send();

  const listings = listingsStore.filterListings(
    (listing) => listing.userId === userId
  );
  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    userName: user.userName,
    phoneNumber: user.phoneNumber,
    userRole: user.userRole,
    listings: listings.length,
  });
});

router.get("/:id/listings", auth, (req, res) => {
  const id = parseInt(req.params.id);
  const listings = listingsStore.filterListings(
    (listing) => listing.user.id === id
  );
  const resources = listings.map(listingMapper);
  res.status(201).send(resources);
});

module.exports = router;
