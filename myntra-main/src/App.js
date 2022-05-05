import { Route, Routes } from "react-router-dom";
import Address from "./components/Address/Address";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import OrderConfirm from "./components/Payment/OrderConfirm";
import Payment from "./components/Payment/Payment";
import RegisterForm from "./components/Register/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
