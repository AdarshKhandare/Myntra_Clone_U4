
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const RegisterForm = () => {
//   const notify = () => toast("Register Suceessfull!");
//   

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     const inputName = e.target.name;
//     setFormData({
//       ...formData,
//       [inputName]: e.target.value,
//     });
//   };
//   const postData = async () => {
//     try {
//       let res = await fetch("http://localhost:5000/registeruser", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       let data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postData();
//     setInterval(function () {
//       navigate("/login");
//     }, 2000);
//   };


import { useState } from "react";
import {useDispatch} from "react-redux"
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
import registerbanner from "../../Images/registerbanner.webp";
import { useNavigate } from "react-router-dom";
import { BannerImg, Container, Form, RegiName, SubmitButton } from "./Register.element";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "telephone",
      placeholder: "Mobile Number",
      errorMessage: "Mobile Number should be 10 Numbers",
      pattern: "^[0-9]{10}$",
      label: "Mobile Number",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        values,
      },
      
    });
    navigate("/login");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container className="app">
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit}>
        <RegiName>REGISTER</RegiName>
        {inputs.map((input) => (
          <Register
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default RegisterForm;
