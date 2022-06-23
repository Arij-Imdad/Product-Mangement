import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleValueChange = (e, inputFieldName = "") => {
    if (inputFieldName === "password") {
      setPassword(e.target.value);
    }
    if (inputFieldName === "email") {
      setEmail(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    let header = { authorization: "ssssdsadsdsadasdasd" };
    axios
      .post("http://localhost:8000/login", data, header)
      .then((res) => {
        if (res.data.message === 'incorrect email or password') {
          alert('incorrect email or password')
        }else{
            history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleOnCLick = () => {
    history.push("/signup")
  }
  return (
      <div>

        <form onSubmit={(e) => onFormSubmit(e)} style={{ marginTop: 50 }}>
        <label>
            Email:
            <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleValueChange(e, "email")}
            />
        </label>
        <label>
            Password:
            <input
            type="text"
            name="firstname"
            value={password}
            onChange={(e) => handleValueChange(e, "password")}
            />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <span onClick={handleOnCLick}>SignUp</span>
    </div>
  );
};

export default SingIn;
