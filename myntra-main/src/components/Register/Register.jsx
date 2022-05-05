import { useState } from "react";
import "./register.css";
import { FormInputDiv, Input, Span } from "./Register.element";

const Register = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <FormInputDiv>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <Span>{errorMessage}</Span>
    </FormInputDiv>
  );
};

export default Register;
