// ? * --> Single user Routers
const express = require("express");
const router = express.Router();
// * -->
const usersStore = require("../store/users");
const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");

// ? * --> Routers

/// *-->// Delete Single user By ID
router.delete("/:id", async (req, res) => {
  try {
    usersStore.deleteUser(req.id);
    res.status(201).send({ message: "user has been removed!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "unknown error occurred" });
  }
});

/// *-->// Get user by Id
router.get("/:id", async (req, res) => {
  try {
    const user = await usersStore.getUserById(req.params.id, true);
    if (!user) return res.status(404).send({ message: "user not found 404!" });
    res.status(201).send(user);
  } catch (error) {
    console.error("error", error);
    res.status(500).send({ message: "unknown error occurred" });
  }
});

/// *-->// Get user listings
router.get("/:id/listings", auth, async (req, res) => {
  try {
    const listings = await listingsStore.filterListings(
      (list) => list.user.id === req._id
    );
    res.status(201).send(listings);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "unknown error occurred" });
  }
});

// router.get("/listings", auth, (req, res) => {
//   const listings = listingsStore.filterListings(
//     listing => listing.userId === req.user.userId
//   );
//   const resources = listings.map(listingMapper);
//   res.send(resources);
// });

// module.exports = router;

/// *-->// update single user

router.patch("/:id", auth, async (req, res) => {
  const user = req.body;
  user._id = req.params.id;
  const response = await usersStore.updateUser(user);
  if (response.flag === "notFound")
    return res.status(404).send({
      message:
        "unknown error occurred no user with the given id found please close and re-open the application if you have deleted the user before ",
    });
  if (response.flag === "updated")
    return res.status(201).send(response.updatedUser);
  if (response.flag === "error") return res.status(400).send(response.error);
});
module.exports = router;
