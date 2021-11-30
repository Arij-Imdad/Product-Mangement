const models  = require('./../models');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secreatTokenKey =
  "97c8f3301b738b2c60691807d14ebb17330e9c24f2acdad30063237d5ea631ab78d647b804e8ec169af67a4ab1ff26e03d90696c72ca0ca9d59878ed63d86ce3";
const createNewUser = async (req, res) => {
  if (req && req.body) {
    models.users.findAll({ where: { email: req.body.email } }).then((result) => {
      if (result && result.length > 0) {
        res.send("User aleardy exist with this email");
      }
    });
    //convert password to hash
    const password = req.body.email
    const encryptedPassword = await bcrypt.hash(password, 10);

    console.log('checking encrypted passworf',encryptedPassword );
    // Create token
    let email_ = req.body.email;
    const token = jwt.sign({ user_id: user._id, email_ }, secreatTokenKey, {
      expiresIn: "500h",
    });
    const user = await models.users.create({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: encryptedPassword,
      token:token
    });

    user.token = token;

    res.status(201).json(user);
  }
};

const getUser = (req, res) => {
  console.log("Checking the req and res", req.body);
  if (req && req.body) {
    User.findAll({ where: { email: req.body.email } }).then((result) => {
      console.log("checking the result", result);
      res.send(result);
    });
  }
};

module.exports = {
  createNewUser,
  getUser,
};
