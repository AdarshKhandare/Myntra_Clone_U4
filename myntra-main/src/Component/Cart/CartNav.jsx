import React from "react";
import {
  AddressCheckout,
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN,
} from "./CartNav.element";

import myntraLogo from "../../Images/myntraLogo.png";
import secure from "../../Images/secure.png";

const CartNav = () => {
  return (
    <NavContainer>
      <NavLogo>
        <Logo src={myntraLogo} />
      </NavLogo>
      <NavCheckOutSteps>
        <BagCheckout>BAG</BagCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <AddressCheckout>ADDRESS</AddressCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <PaymentCheckout>PAYMENT</PaymentCheckout>
      </NavCheckOutSteps>
      <NavSecure>
        <SecureLogo src={secure} />
        <SecureN>100% SECURE</SecureN>
      </NavSecure>
    </NavContainer>
  );
};

export default CartNav;
