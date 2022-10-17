const express = require("express");
const router = express.Router();

const store = require("../store/errorLogs");

router.get("/", (req, res) => {
  const errorsList = store.getErrors();
  res.status(201).send();
});

router.post("/", async (req, res) => {
  store.postErrors(req.body);
  // console.log(req);
  res.status(201).send({ message: "error received " });
});

module.exports = router;
