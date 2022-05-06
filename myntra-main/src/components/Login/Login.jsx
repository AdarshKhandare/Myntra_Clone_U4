import { useState } from "react";
import "../Register/register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerbanner from "../../Images/registerbanner.webp";
import { useNavigate } from "react-router-dom";
import {
  BannerImg,
  Containerr,
  Form,
  RegiName,
  SubmitButton,
} from "./Login.element";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebse/firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/cart");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Containerr className="app">
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit} className="formInput">
        <RegiName>LOGIN</RegiName>
        <input
          className="inputtt"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputtt"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Containerr>
  );
};

export default Login;
