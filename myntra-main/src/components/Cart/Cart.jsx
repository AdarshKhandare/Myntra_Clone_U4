import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BookmarkBorderOutlined, CloseOutlined, DiscountOutlined, LocalOfferOutlined } from "@mui/icons-material";
import truck from "../../Images/truck.webp";
import myntraLogo from "../../Images/myntraLogo.png";
import secure from "../../Images/secure.png";
import allpamentimage from "../../Images/allpamentimage.png";
import {
  AddressCheckout,
  AddressDiv,
  AllPriceDiv,
  AppCou,
  ApplyButton,
  ApplyCoupondiv,
  AvailableofferDiv,
  AvaOffer,
  BagCheckout,
  Brand,
  CartFooter,
  CartItemDiv,
  CartItems,
  CartLeft,
  CartRight,
  ChangeButton,
  ContactUs,
  Container,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CouponApplyDiv,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  DeliverTo,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  DotsCheckout,
  Filter,
  Filtercontainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  FirstOffer,
  Hr,
  Imagediv,
  ItemIamge,
  ItemInfoDiv,
  Logo,
  LogoTruck,
  Name,
  NameC,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  NoConvi,
  NoConviDiv,
  Oprice,
  PaymentCheckout,
  PaymentImg,
  PercentOff,
  PlaceorderButton,
  PlaceorderDiv,
  Price,
  PriceDetailsT,
  PriceDis,
  RButton,
  RemoveButtonDiv,
  SecureLogo,
  SecureN,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TopLA,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
  WishListItem,
  WishName,
} from "./Cart.element";

const Cart = () => {
  return (
    <Container>
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
      <CartItems>
        <CartLeft>
          <AddressDiv>
            <DeliverTo>Deliver To:</DeliverTo>
            <ChangeButton>CHANGE ADDRESS</ChangeButton>
          </AddressDiv>

          <AvailableofferDiv>
            <TopLA>
              <DiscountOutlined sx={{ width: "25px", height: "25px" }} />
              <AvaOffer>Available Offers</AvaOffer>
            </TopLA>
            <FirstOffer>
              10% Instant Discount on American Express Cards on a min spend of
              Rs 3,500. TCA
            </FirstOffer>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#ff3f6c",
                      marginLeft: "-530px",
                      fontSize: "12px",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#ff3f6c",
                    fontSize: "12px",
                    marginBottom: "none",
                  }}
                >
                  Show More
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Instant Discount on Bank Of Baroda Credit cards on a min
                  spend of Rs 3,000.TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 100 on Paytm Postpaid transaction on a
                  min spend of Rs 1000 . TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  15% Cashback upto Rs 150 on Freecharge Paylater transaction.
                  TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                  transaction on a min spend of Rs 1000 . TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min
                  spend of Rs 999.Use code MBK500 on Mobikwik. TCA{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AvailableofferDiv>
          <NoConviDiv>
            <LogoTruck src={truck} />
            <NoConvi>
              Yay! <b>No Convenience Fee</b> on this order{" "}
            </NoConvi>
          </NoConviDiv>

          <CartItemDiv>
            <Imagediv>
              <ItemIamge src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg" />
            </Imagediv>

            <ItemInfoDiv>
              <Brand>Roadster</Brand>
              <Name>Men Blue Regular Fit Printed Casual Shirt</Name>
              <Filtercontainer>
                <Filter>
                  <FilterTitle>Size:</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
                <Filter>
                  <FilterTitle>Qty:</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>1</FilterSizeOption>
                    <FilterSizeOption>2</FilterSizeOption>
                    <FilterSizeOption>3</FilterSizeOption>
                    <FilterSizeOption>4</FilterSizeOption>
                    <FilterSizeOption>5</FilterSizeOption>
                    <FilterSizeOption>6</FilterSizeOption>
                    <FilterSizeOption>7</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </Filtercontainer>
              <PriceDis>
                <Price>₹1200</Price>
                <Oprice>₹1600</Oprice>
                <PercentOff>30% OFF</PercentOff>
              </PriceDis>
            </ItemInfoDiv>
            <RemoveButtonDiv>
              <RButton>
                <CloseOutlined sx={{ width: "25px", height: "25px" }} />
              </RButton>
            </RemoveButtonDiv>
          </CartItemDiv>
          <WishListItem>
            <BookmarkBorderOutlined sx={{ width: "25px", height: "25px" }} />
            <WishName>Add More From WishList</WishName>
          </WishListItem>
        </CartLeft>
        <CartRight>
          <CouponApplyDiv>
            <NameC>Coupons</NameC>
            <ApplyCoupondiv>
              <LocalOfferOutlined sx={{ width: "25px", height: "25px" }} />
              <AppCou>Apply Coupons</AppCou>
              <ApplyButton>APPLY</ApplyButton>
            </ApplyCoupondiv>
          </CouponApplyDiv>
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
        </CartRight>
      </CartItems>
      <Hr />

      <CartFooter>
        <PaymentImg src={allpamentimage} />
        <ContactUs>Need Help? Contact Us</ContactUs>
      </CartFooter>
    </Container>
  );
};

export default Cart;
