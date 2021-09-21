const express = require("express");
const router = express.Router();
const { queryExecution } = require("../../../database");


router.post("/", async (req, res) => {
  let query = "";
  query = `Select * from users where email = '${req.body.email}'`;
  // Check if user aleardy exist or not
  try {
    let queryResults = await queryExecution(query);
    if (queryResults) {
      console.log("ssssss", queryResults);
      if (queryResults.length > 0) {
        let message = "User Aleardy Exist";
        res.send({ message: message });
      } else {
        query = `
           INSERT INTO users (email, firstName, lastName, phone)
           VALUES ('${req.body.email}','${req.body.first_name}', '${req.body.last_name}', '${req.body.phone}')
           `;
        let insertNewUserData = await queryExecution(query);
        console.log("insertNewUserData", insertNewUserData);
        res.send({ message: "user added successfully" });
      }
    }
  } catch (e) {
    console.log("erroreee", e);
    res.sendStatus(500);
  }
});

module.exports = router