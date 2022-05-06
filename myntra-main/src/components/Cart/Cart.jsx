import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  BookmarkBorderOutlined,
  CloseOutlined,
  DiscountOutlined,
  LocalOfferOutlined,
} from "@mui/icons-material";
import truck from "../../Images/truck.webp";

import {
  AddressDiv,
  AvailableofferDiv,
  AvaOffer,
  Brand,
  CartItemDiv,
  CartItems,
  CartLeft,
  ChangeButton,
  Container,
  DeliverTo,
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
  LogoTruck,
  Name,
  NoConvi,
  NoConviDiv,
  Oprice,
  PercentOff,
  Price,
  PriceDis,
  RButton,
  RemoveButtonDiv,
  TopLA,
  WishListItem,
  WishName,
} from "./Cart.element";
import CartNav from "./CartNav";
import CartFoot from "./CartFoot";
import CartRightS from "./CartRight";

const Cart = () => {
  return (
    <Container>
      <CartNav color="20bd99" />
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
        <CartRightS />
      </CartItems>
      <CartFoot />
    </Container>
  );
};

export default Cart;
