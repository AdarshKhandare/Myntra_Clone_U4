import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerbanner from "../../Images/registerbanner.webp";
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";
import {
  BannerImg,
  Containerr,
  Form,
  RegiName,
  SubmitButton,
} from "./Login.element";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   birthday: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const users = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = users.find((user) => user.username === username && user.password === password);

    if (payload) {
      dispatch({
        type: "LOGIN",
        username,password,
      });
      alert("Login successful")
    } else {
      dispatch({
        type: "LOGIN_FAIL",
        payload,
      });
      // alert("Wrong username Or Password");
    }
  };

  return (
    <Containerr className="app">
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit}>
        <RegiName>LOGIN</RegiName>
        <input
          name="username"
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
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
