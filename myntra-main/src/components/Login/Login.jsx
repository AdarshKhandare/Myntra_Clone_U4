import React from "react";
import registerbanner from "../../Images/registerbanner.webp";
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
  return (
    <Container>
      <RegisterFull>
        <RegisterWindow>
          <ImageDiv>
            <BannerImg src={registerbanner} />
          </ImageDiv>
          <FormDiv>
            <HeadingRegister>LOGIN</HeadingRegister>
            <FormR>
              <EmailR placeholder="Enter Your Email Number" />
              <PasswordR placeholder="Enter Your Password" />
              <SubmitR type="submit" />
            </FormR>
          </FormDiv>
        </RegisterWindow>
      </RegisterFull>
    </Container>
  );
};

export default Login;
