import React, { useState } from "react";
import registerbanner from "../../Images/registerbanner.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  BannerImg,
  Container,
  EmailR,
  FormDiv,
  FormR,
  HeadingRegister,
  ImageDiv,
  PasswordR,
  RegisterFull,
  RegisterWindow,
  SubmitR,
} from "./Login.element";
const Login = () => {
  const notify = () => toast("Login Suceessfull!");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:5000/registeruser")

      let data = await res.json();

      if(email === data[0].email){
         setInterval(function () {
           navigate("/cart");
           toast("Login Succrss")
         }, 2000);
      }
      else{
        console.log("furre")
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e ) => {
    e.preventDefault();
    getData();
 


  };
  return (
    <Container>
      <RegisterFull>
        <RegisterWindow>
          <ImageDiv>
            <BannerImg src={registerbanner} />
          </ImageDiv>
          <FormDiv>
            <HeadingRegister>LOGIN</HeadingRegister>
            <FormR onSubmit={handleSubmit}>
              <EmailR
                value={email}
                placeholder="Enter Your Email Number"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordR
                value={password}
                placeholder="Enter Your Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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

export default Login;
