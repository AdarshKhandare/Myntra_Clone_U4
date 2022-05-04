import React from "react";
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
const RegisterForm = () => {
  return (
    <Container>
      <RegisterFull>
        <RegisterWindow>
          <ImageDiv>
            <BannerImg src={registerbanner} />
          </ImageDiv>
          <FormDiv>
            <HeadingRegister>REGISTER</HeadingRegister>
            <FormR>
              <NameR placeholder="Enter Your Name" />
              <MobileR placeholder="Enter Your Mobile Number" />
              <EmailR placeholder="Enter Your Email Number" />
              <PasswordR placeholder="Enter Your Password" />
              <ConfirmPasswordR placeholder="Confirm Password" />
              <SubmitR type="submit" />
            </FormR>
          </FormDiv>
        </RegisterWindow>
      </RegisterFull>
    </Container>
  );
};

export default RegisterForm;
