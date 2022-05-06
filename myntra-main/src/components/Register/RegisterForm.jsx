import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebse/firebase-config";
import "./register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerbanner from "../../Images/registerbanner.webp";
import { useNavigate } from "react-router-dom";
import {
  BannerImg,
  Container,
  Form,
  RegiName,
  SubmitButton,
} from "./Register.element";
import "./register.css";
import { FormInputDiv, Input, Span } from "./Register.element";
const RegisterForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="app">
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit} className="formInput">
        
          <input
            className="inputtt"
            name="username"
            type="text"
            placeholder="Username"
            pattern={"^[A-Za-z0-9]{3,16}$"}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleFocus}
            onFocus={() => username === "username" && setFocused(true)}
            focused={focused.toString()}
          />
          <Span>
            Username should be 3-16 characters and shouldn't include any special
            character!
          </Span>
          <input
            className="inputtt"
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleFocus}
            onFocus={() => email === "email" && setFocused(true)}
            focused={focused.toString()}
          />
          <Span>It should be a valid email address!</Span>
          <input
            className="inputtt"
            name="mobile"
            type="telephone"
            placeholder="Mobile Number"
            pattern={"^[0-9]{10}$"}
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={handleFocus}
            onFocus={() => mobile === "mobile" && setFocused(true)}
            focused={focused.toString()}
          />
          <Span>Mobile Number should be 10 Numbers</Span>
          <input
            className="inputtt"
            name="password"
            type="password"
            placeholder="Password"
            pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleFocus}
            onFocus={() => password === "password" && setFocused(true)}
            focused={focused.toString()}
          />
          <Span>
            Password should be 8-20 characters and include at least 1 letter, 1
            number and 1 special character!
          </Span>
          <input
            className="inputtt"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            pattern={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleFocus}
            onFocus={() =>
              confirmPassword === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
          />
          <Span>Passwords don't match!</Span>
        
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default RegisterForm;
