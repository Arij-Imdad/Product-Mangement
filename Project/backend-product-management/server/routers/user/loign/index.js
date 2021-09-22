const express = require("express");
const router = express.Router();
const { queryExecution } = require("../../../database");

router.post("/", async (req, res) => {
  let query = "";
  query = `Select * from users where email = '${req.body.email}'`;
  try {
    let queryResults = await queryExecution(query);
    if (queryResults) {
      if (queryResults.length > 0) {
        let message = "login Successfully";
        res.send({ message: message });
      } else {
        let message = "incorrect email or password";
        res.send({ message: message });
      }
    }
  } catch (e) {
    console.log("erroreee", e);
    res.sendStatus(500);
  }
});

module.exports = router;
