const express = require("express");
const router = express.Router();
const userContoller = require("../../controllers/user");

// **************User Routes*************

router.post("/login", userContoller.getUser);
router.post("/signup", userContoller.createNewUser);

module.exports = router;
