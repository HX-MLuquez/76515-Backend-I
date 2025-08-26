const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const users = [];
  res.status(200).json({ success: true, users });
});

router.get("/juju", (req, res) => {
  
  res.status(200).json({ success: true });
});

router.post("/created", (req, res) => {
  
  res.status(200).json({ success: true });
});

module.exports = router;