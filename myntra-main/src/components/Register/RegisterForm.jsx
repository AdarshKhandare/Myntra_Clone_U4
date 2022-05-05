import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BannerImg,
  ConfirmPasswordR,
  Container,
  EmailR,
  FormDiv,
  FormR,
  HeadingRegister,
  ImageDiv,
  MobileR,
  NameR,
  PasswordR,
  RegisterFull,
  RegisterWindow,
  SubmitR,
} from "./RegisterForm.element";
import registerbanner from "../../Images/registerbanner.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const notify = () => toast("Register Suceessfull!");
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const inputName = e.target.name;
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };
  const postData = async () => {
    try {
      let res = await fetch("http://localhost:5000/registeruser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setInterval(function () {
      navigate("/login");
    }, 2000);
  };

  return (
    <Container>
      <RegisterFull>
        <RegisterWindow>
          <ImageDiv>
            <BannerImg src={registerbanner} />
          </ImageDiv>
          <FormDiv>
            <HeadingRegister>REGISTER</HeadingRegister>
            <FormR onSubmit={handleSubmit}>
              <NameR
                placeholder="Enter Your Name"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
              <MobileR
                placeholder="Enter Your Mobile Number"
                type="telephone"
                name="mobilenum"
                onChange={handleChange}
              />
              <EmailR
                placeholder="Enter Your Email Number"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <PasswordR
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={handleChange}
              />
              <ConfirmPasswordR
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={handleChange}
                required
                errorMessage="Passwords don't match!"
              />
              <SubmitR type="submit" onClick={notify} />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              {/* Same as */}
              <ToastContainer />
            </FormR>
          </FormDiv>
        </RegisterWindow>
      </RegisterFull>
    </Container>
  );
};

export default RegisterForm;
