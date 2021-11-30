import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let history = useHistory();

  const handleValueChange = (e, inputFieldName = "") => {
    if (inputFieldName === "firstname") {
      setFirstname(e.target.value);
    }
    if (inputFieldName === "lastname") {
      setLastName(e.target.value);
    }
    if (inputFieldName === "phonenumber") {
      setPhoneNumber(e.target.value);
    }
    if (inputFieldName === "email") {
      setEmail(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
    };
    console.log("checking the data", data);
    let header = { authorization: "ssssdsadsdsadasdasd" };
    axios
      .post("http://localhost:8000/signup", data, header)
      .then((res) => {
        console.log("checking res of submitter data", res);
        if (res.data.message) {
          alert("User aleardy exist with this email");
        } else {
          history.push("/");
          setFirstname("");
          setLastName("");
          setPhoneNumber("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
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
        First Name:
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => handleValueChange(e, "firstname")}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => handleValueChange(e, "lastname")}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phonenumber"
          value={phoneNumber}
          onChange={(e) => handleValueChange(e, "phonenumber")}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignUp;
