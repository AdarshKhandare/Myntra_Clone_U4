import { useState } from "react";
import "../Register/register.css";
import { ToastContainer } from "react-toastify";
import {toast}  from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import registerbanner from "../../Images/registerbanner.webp";
import { Link, useNavigate } from "react-router-dom";
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
      toast.dark("LOGIN SUCCESSFULL (enjoy)", {
        theme: "colored",
      });
      navigate("/cart");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error("LOGIN FAILED (check your email or password)", {
        theme: "colored",
      });
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
      <ToastContainer />
      <p>
        New Here please
        <Link to="/register">Register</Link>
      </p>
    </Containerr>
  );
};

export default Login;
