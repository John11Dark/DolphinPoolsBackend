const express = require("express");
const router = express.Router();
//const Joi = require("joi");

const store = require("../store/comments");
//const validateWith = require("../middleware/validation");

//const schema = {};

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comments = store.getComments(id);
  res.status(201).send(comments);
});

router.post("/", async (req, res) => {
  const comment = {
    id: req.body.id,
    listingId: req.body.listingId,
    comment: req.body.comment,
    dateTime: req.body.dateTime,
    user: req.body.user,
  };

  store.postComments(comment);

  res.status(201).send(comment);
});

// router.patch("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   console.log(store.getListing(id));
//   store.updateList(id, req.body);
//   console.log(store.getListing(id));
// });

// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   store.deleteList(id);
// });

module.exports = router;
