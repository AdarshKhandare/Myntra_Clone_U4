import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebse/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterInput from "./RegisterInput";
import registerbanner from "../../Images/registerbanner.webp";
import "./register.css";
const RegisterForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      toast.success("Registration Successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Email Id Already Exists!");
    }
  };

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
      errorMessage: "It should be a valid mobile Number of 10 digit!",
      pattern: `^[0-9]{10}$`,
      label: "mobile",
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

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <img src={registerbanner} alt="" />
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        {inputs.map((input) => (
          <RegisterInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../firebse/firebase-config";
// import "./register.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import registerbanner from "../../Images/registerbanner.webp";
// import { useNavigate } from "react-router-dom";
// import {
//   BannerImg,
//   Container,
//   Form,
//   RegiName,
//   SubmitButton,
// } from "./Register.element";
// import "./register.css";
// import { FormInputDiv, Input, Span } from "./Register.element";
// const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const [focused, setFocused] = useState(false);
//   const handleFocus = (e) => {
//     setFocused(true);
//   };
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     debugger;
//     e.preventDefault();
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(user);
//       navigate("/login");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <Container className="app">
//       <BannerImg src={registerbanner} alt="" />
//       <Form onSubmit={handleSubmit} className="formInput">
//         <input
//           className="inputtt"
//           name="username"
//           type="text"
//           placeholder="Username"
//           pattern={"^[A-Za-z0-9]{3,16}$"}
//           required={true}
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           onBlur={handleFocus}
//           onFocus={() => setFocused(true)}
//           focused={focused.toString()}
//         />
//         <span>
//           Username should be 3-16 characters and shouldn't include any special
//           character!
//         </span>
//         <input
//           className="inputtt"
//           name="email"
//           type="email"
//           placeholder="Email Address"
//           notRequired
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           onBlur={handleFocus}
//           onFocus={() => email === "email" && setFocused(true)}
//           focused={focused.toString()}
//         />
//         <span>It should be a valid email address!</span>
//         <input
//           className="inputtt"
//           name="mobile"
//           type="telephone"
//           placeholder="Mobile Number"
//           pattern={"^[0-9]{10}$"}
//           required={true}
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           onBlur={handleFocus}
//           onFocus={() => mobile === "mobile" && setFocused(true)}
//           focused={focused}
//         />
//         <span>Mobile Number should be 10 Numbers</span>
//         <input
//           className="inputtt"
//           name="password"
//           type="password"
//           placeholder="Password"
//           pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
//           required={true}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           onBlur={handleFocus}
//           onFocus={() => password === "password" && setFocused(true)}
//           focused={focused}
//         />
//         <span>
//           Password should be 8-20 characters and include at least 1 letter, 1
//           number and 1 special character!
//         </span>
//         <input
//           className="inputtt"
//           name="confirmPassword"
//           type="password"
//           placeholder="Confirm Password"
//           required={true}
//           value={confirmPassword}
//           pattern={password}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           onBlur={handleFocus}
//           onFocus={() =>
//             confirmPassword === "confirmPassword" && setFocused(true)
//           }
//           focused={focused}
//         />
//         <span>Passwords don't match!</span>

//         <SubmitButton>Submit</SubmitButton>
//       </Form>
//     </Container>
//   );
// };

// export default RegisterForm;
