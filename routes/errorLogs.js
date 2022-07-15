const express = require("express");
const router = express.Router();

const store = require("../store/errorLogs");

router.get("/", (req, res) => {
  const errorsList = store.getErrors();
  res.status(201).send(errorsList);
});

router.post("/", async (req, res) => {
  store.postErrors(req.body);

  res.status(201).send(req.body);
});

// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   store.deleteList(id);
// });

module.exports = router;
