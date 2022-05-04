import React from "react";
import CartFoot from "../Cart/CartFoot";
import CartRight from "../Cart/CartRight";
import {
  AddAddressButton,
  AddressCheckoutAdd,
  Addressdiv,
  AddressFormDiv,
  ButtonDiv,
  CityInput,
  ContactDetailsdiv,
  ContactInput,
  Container,
  DotsCheckoutAdd,
  FormDiv,
  FormLeftdiv,
  FormRightDiv,
  FullAddInput,
  Headings,
  NameInput,
  PinCodeInput,
  PlaceorderButton,
  PlaceorderDiv,
  SaveAddressdiv,
  SaveHome,
  SaveWork,
  StateInput,
  TownInput,
} from "./Address.element";
import myntraLogo from "../../Images/myntraLogo.png";
import secure from "../../Images/secure.png";
import {
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
} from "../Cart/CartNav.element";
import {
  AllPriceDiv,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
} from "../Cart/CartRight.element";
const Address = () => {
  return (
    <Container>
      <NavContainer>
        <NavLogo>
          <Logo src={myntraLogo} />
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutAdd>---------</DotsCheckoutAdd>
          <AddressCheckoutAdd>ADDRESS</AddressCheckoutAdd>
          <DotsCheckout>---------</DotsCheckout>
          <PaymentCheckout>PAYMENT</PaymentCheckout>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={secure} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <AddressFormDiv>
        <FormLeftdiv>
          <FormDiv>
            <ContactDetailsdiv>
              <Headings>Contact Details</Headings>

              <NameInput placeholder="Enter Your Name" />
              <ContactInput placeholder="Enter Your Mobile No." />
            </ContactDetailsdiv>
            <Addressdiv>
              <Headings>Address</Headings>
              <PinCodeInput placeholder="Enter Pin Code" />
              <FullAddInput placeholder="Enter Full Address" />
              <TownInput placeholder="Enter Locality/Town" />
              <CityInput placeholder="Enter City/District" />
              <StateInput placeholder="Enter State" />
            </Addressdiv>
            <SaveAddressdiv>
              <Headings>Save Address as:</Headings>

              <SaveHome>Home</SaveHome>
              <SaveWork>Work</SaveWork>
            </SaveAddressdiv>
            <ButtonDiv>
              <AddAddressButton>ADD ADDRESS</AddAddressButton>
            </ButtonDiv>
          </FormDiv>
        </FormLeftdiv>
        <FormRightDiv>
          <AllPriceDiv>
            <PriceDetailsT>PRICE DETAILS (1 items)</PriceDetailsT>
            <TmrpDiv>
              <Tmrp>TOTAL MRP</Tmrp>
              <Tmrprs>₹1,200</Tmrprs>
            </TmrpDiv>
            <DmrpDiv>
              <Dmrp>Discount on MRP</Dmrp>
              <Dmrprs>-₹1,600</Dmrprs>
            </DmrpDiv>
            <CoupDisDiv>
              <CoupDis>Coupon Discount</CoupDis>
              <CoupDisrs>Apply Coupon</CoupDisrs>
            </CoupDisDiv>
            <CoviFeediv>
              <CoviFee>Convenience Fee</CoviFee>
              <CoviFeeKM>Know More</CoviFeeKM>
              <CoviFeers>FREE</CoviFeers>
            </CoviFeediv>
          </AllPriceDiv>
          <TotalPriceDiv>
            <TotalAmountdiv>
              <TotalAmount>Total Amount</TotalAmount>
              <TotalAmountrs>₹1,200</TotalAmountrs>
            </TotalAmountdiv>
            <PlaceorderDiv>
              <PlaceorderButton>PLACE ORDER</PlaceorderButton>
            </PlaceorderDiv>
          </TotalPriceDiv>
        </FormRightDiv>
      </AddressFormDiv>
      <CartFoot />
    </Container>
  );
};

export default Address;
